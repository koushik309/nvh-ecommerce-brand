# ---- Base image ----
FROM node:18-alpine AS base
ENV NODE_ENV=production
WORKDIR /app

# ---- Dependencies layer ----
FROM base AS deps
COPY package.json package-lock.json* ./
RUN npm install

# ---- Build layer ----
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Runtime layer ----
FROM node:18-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app

# Copy built app and deps only
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
