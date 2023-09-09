# Builder Stage
FROM node:lts-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Runner Stage
FROM node:lts-alpine as runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

CMD ["yarn", "start"]
