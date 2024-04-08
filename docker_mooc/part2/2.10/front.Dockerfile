FROM node:16-slim

RUN apt update \
    && apt install -y subversion \
    && apt install -y xsel

#Download only needed folder with SVN
RUN svn checkout --trust-server-cert https://github.com/docker-hy/material-applications/trunk/example-frontend

WORKDIR /example-frontend

RUN npm install \
    && npm install -g serve

ENV REACT_APP_BACKEND_URL=http://localhost:80/api

RUN npm run build

ENTRYPOINT serve -s -l $FRONT_PORT build