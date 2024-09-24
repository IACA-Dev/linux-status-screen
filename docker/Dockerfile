#  Stage 1 : Build
FROM node:18.19.1-alpine AS builder
LABEL authors="IACA Electronique"

WORKDIR /app
COPY . .

RUN npm i && ./node_modules/.bin/vue-cli-service build

# Stage 2 : Runtime
FROM node:18.19.1-alpine
LABEL authors="IACA Electronique"

WORKDIR /app

COPY --from=builder /app/dist dist
COPY docker/entrypoint.sh .
COPY docker/utils.sh .
COPY docker/app.js .
COPY docker/package.json .

RUN npm i && apk add bash

CMD ["/bin/bash", "./entrypoint.sh"]