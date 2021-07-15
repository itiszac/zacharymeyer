FROM node AS base

FROM base AS deps
WORKDIR /deps
COPY package.json ./
RUN npm install

FROM base AS builder
WORKDIR /builder
COPY --from=deps /deps/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV PORT 8080

COPY --from=builder /builder/build/ ./build
COPY --from=builder /builder/node_modules ./node_modules
COPY --from=builder /builder/package.json ./package.json

EXPOSE ${PORT}
CMD ["npm", "run", "start"]