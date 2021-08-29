FROM node:14.17.3-alpine

WORKDIR /dynamo-admin

COPY ./package.json ./yarn.lock ./dynamo_admin ./

RUN yarn install

EXPOSE 8001

CMD ["node", "main.mjs"]