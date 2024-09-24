FROM node:18.19.1-alpine

WORKDIR /app

COPY dist dist
COPY docker/entrypoint.sh .
COPY docker/utils.sh .
COPY docker/app.js .
COPY docker/package.json .

RUN npm i && apk add bash

CMD ["/bin/bash", "./entrypoint.sh"]