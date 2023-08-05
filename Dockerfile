FROM node:16-slim

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT npm run serve -- --build --port 80 --host 0.0.0.0
