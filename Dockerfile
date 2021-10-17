FROM node:slim

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build
