# Production Dockerfile for Next.js on Google Cloud Run
# Multi-stage build for minimal image size

# ── Stage 1: Install dependencies ────────────────────────────────────
FROM node:20-slim AS deps

WORKDIR /app

COPY package*.json ./
RUN npm ci

# ── Stage 2: Build the application ──────────────────────────────────
FROM node:20-slim AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV STANDALONE=true
ENV BUILD_DIR=.next-build
RUN npm run build:docker

# ── Stage 3: Production runtime ─────────────────────────────────────
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone server (includes server.js and node_modules)
COPY --from=builder --chown=nextjs:nodejs /app/.next-build/standalone ./
# Copy static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next-build/static ./.next-build/static
# Copy public folder
COPY --from=builder /app/public ./public

USER nextjs

# Cloud Run injects the PORT env var (default 8080).
# The Next.js standalone server honours PORT automatically.
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"
EXPOSE 8080

CMD ["node", "server.js"]
