FROM node:14.17.3-alpine

WORKDIR /gui

RUN yarn init -y && yarn add dynamodb-admin

EXPOSE 8001

CMD ["yarn", "dynamodb-admin"]