FROM node:14.17.3-alpine

WORKDIR /dynamo-admin

COPY ./package.json ./yarn.lock ./dynamo_admin ./

RUN yarn install

ENV DYNAMO_ENDPOINT=dynamodb:8000
ENV AWS_REGION=us-east-1 
ENV AWS_ACCESS_KEY_ID=local 
ENV AWS_SECRET_ACCESS_KEY=local

EXPOSE 8001

CMD ["yarn", "main.mjs"]