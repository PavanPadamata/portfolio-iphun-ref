---
title: Docker Multi-Stage Builds
date: 2024-11-22
excerpt: Optimizing container images and reducing build times with multi-stage Dockerfiles.
author: Pavan Padamata
---

# Docker Multi-Stage Builds

Multi-stage builds help you create smaller, more efficient container images by building in separate stages.

## Benefits

- Reduced image size
- Faster build times
- Separation of build and runtime environments
- Better security

## Example

\`\`\`dockerfile
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --only=production
CMD ["node", "dist/index.js"]
\`\`\`

This approach ensures your production image only contains what's necessary to run the application.
