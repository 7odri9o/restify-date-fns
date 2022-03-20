FROM node:14.19-stretch-slim

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm install --only=prod

COPY ./dist ./dist

EXPOSE 3000

CMD npm start