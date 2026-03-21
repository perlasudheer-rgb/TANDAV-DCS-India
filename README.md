# DCS India Workshop

A [Next.js](https://nextjs.org) application deployed on **Google Cloud Run**.

## Getting Started (Local Development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Google Cloud Run

### Prerequisites

1. Install the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install)
2. Authenticate: `gcloud auth login`
3. Set your project: `gcloud config set project <YOUR_PROJECT_ID>`

### One-command deploy

```bash
./deploy.sh
```

This script will:
- Enable the required GCP APIs (Cloud Run, Cloud Build, Artifact Registry)
- Create an Artifact Registry Docker repository (if it doesn't exist)
- Build the container image via Cloud Build
- Deploy it to Cloud Run
- Print the public URL

### Options

```bash
./deploy.sh --project my-gcp-project   # explicit project ID
./deploy.sh --region us-central1        # override region (default: asia-south1)
./deploy.sh --service my-service-name   # override service name
```

### Manual deploy (without the script)

```bash
# 1. Build & push with Cloud Build
gcloud builds submit \
  --config cloudbuild.yaml \
  --substitutions=_SERVICE_NAME=dcs-india-workshop,_REGION=asia-south1

# 2. Or deploy directly from source (simplest)
gcloud run deploy dcs-india-workshop \
  --source . \
  --region asia-south1 \
  --allow-unauthenticated
```

### Environment variables

Set runtime env vars on Cloud Run:

```bash
gcloud run services update dcs-india-workshop \
  --region asia-south1 \
  --set-env-vars "KEY=value"
```

## Project Structure

| File               | Purpose                                    |
| ------------------ | ------------------------------------------ |
| `Dockerfile`       | Multi-stage production build for Cloud Run |
| `cloudbuild.yaml`  | Cloud Build pipeline configuration         |
| `deploy.sh`        | One-command deploy script                  |
| `.dockerignore`    | Files excluded from Docker build context   |

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloud Run Documentation](https://cloud.google.com/run/docs)
- [Cloud Build Documentation](https://cloud.google.com/build/docs)
