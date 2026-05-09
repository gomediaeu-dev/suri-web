# SURI Web — single-stage production Dockerfile
# Avoids BuildKit multi-stage snapshot issues. Reliable on first try.

FROM node:20-alpine
WORKDIR /app

RUN apk add --no-cache libc6-compat dumb-init && \
    addgroup -S -g 1001 nodejs && \
    adduser -S -u 1001 -G nodejs nextjs

# Install ALL dependencies (incl. dev) for build step
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --prefer-offline --include=dev

# Copy source and build
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Trim devDependencies after build for smaller runtime
RUN npm prune --omit=dev

# Runtime config
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN chown -R nextjs:nodejs /app
USER nextjs
EXPOSE 3000

ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "run", "start"]
