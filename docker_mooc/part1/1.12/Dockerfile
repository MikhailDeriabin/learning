FROM node:16-slim

RUN apt update \
    && apt install -y subversion \
    && apt install -y xsel

#Download only needed folder with SVN
RUN svn checkout --trust-server-cert https://github.com/docker-hy/material-applications/trunk/example-frontend

WORKDIR /example-frontend

RUN npm install \
    && npm install -g serve

RUN npm run build

ENV FRONT_PORT=9090

EXPOSE $FRONT_PORT
ENTRYPOINT serve -s -l $FRONT_PORT build