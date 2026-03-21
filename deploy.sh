#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────
# deploy.sh — Deploy DCS India Workshop to Google Cloud Run
# ─────────────────────────────────────────────────────────────────────
#
# Prerequisites:
#   1. Install the gcloud CLI  — https://cloud.google.com/sdk/docs/install
#   2. Authenticate:            gcloud auth login
#   3. Set your project:        gcloud config set project <PROJECT_ID>
#
# Usage:
#   ./deploy.sh                          # interactive (prompts for project)
#   ./deploy.sh --project my-proj-123    # explicit project
#   ./deploy.sh --region us-central1     # override region (default: asia-south1)
#
# ─────────────────────────────────────────────────────────────────────
set -euo pipefail

# ── Defaults ────────────────────────────────────────────────────────
SERVICE_NAME="dcs-india-workshop"
REGION="asia-south1"
PROJECT_ID=""

# ── Parse arguments ────────────────────────────────────────────────
while [[ $# -gt 0 ]]; do
  case "$1" in
    --project)  PROJECT_ID="$2"; shift 2 ;;
    --region)   REGION="$2";     shift 2 ;;
    --service)  SERVICE_NAME="$2"; shift 2 ;;
    *)          echo "Unknown option: $1"; exit 1 ;;
  esac
done

# ── Resolve project ────────────────────────────────────────────────
if [[ -z "$PROJECT_ID" ]]; then
  PROJECT_ID=$(gcloud config get-value project 2>/dev/null || true)
fi

if [[ -z "$PROJECT_ID" ]]; then
  echo "❌  No GCP project set. Run:  gcloud config set project <PROJECT_ID>"
  exit 1
fi

echo "──────────────────────────────────────────"
echo "  Service : $SERVICE_NAME"
echo "  Project : $PROJECT_ID"
echo "  Region  : $REGION"
echo "──────────────────────────────────────────"

# ── Enable required APIs (idempotent) ──────────────────────────────
echo "🔧  Enabling required APIs..."
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  --project="$PROJECT_ID" --quiet

# ── Create Artifact Registry repo if needed ────────────────────────
AR_REPO="cloud-run-source-deploy"
if ! gcloud artifacts repositories describe "$AR_REPO" \
      --location="$REGION" --project="$PROJECT_ID" &>/dev/null; then
  echo "📦  Creating Artifact Registry repository..."
  gcloud artifacts repositories create "$AR_REPO" \
    --repository-format=docker \
    --location="$REGION" \
    --project="$PROJECT_ID" \
    --quiet
fi

# ── Option A: Deploy with Cloud Build (recommended) ────────────────
echo ""
echo "🚀  Submitting build & deploying to Cloud Run..."
gcloud builds submit \
  --config cloudbuild.yaml \
  --substitutions="_SERVICE_NAME=$SERVICE_NAME,_REGION=$REGION" \
  --project="$PROJECT_ID" \
  --quiet

# ── Print service URL ──────────────────────────────────────────────
URL=$(gcloud run services describe "$SERVICE_NAME" \
  --region="$REGION" \
  --project="$PROJECT_ID" \
  --format="value(status.url)")

echo ""
echo "✅  Deployed successfully!"
echo "🌐  $URL"