FROM node:16

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.6.1

RUN apt update && apt install -y wget

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY ./package*.json ./

RUN npm install .

EXPOSE 3000
