FROM node:22-slim@sha256:fe64023c6490eb001c7a28e9f92ef8deb6e40e1b7fc5352d695dcaef59e1652d

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN yarn

EXPOSE 80

ENTRYPOINT yarn build && yarn serve --port 80 --host 0.0.0.0
