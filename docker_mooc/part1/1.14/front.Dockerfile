FROM node:16-slim

RUN apt update \
    && apt install -y subversion \
    && apt install -y xsel

#Download only needed folder with SVN
RUN svn checkout --trust-server-cert https://github.com/docker-hy/material-applications/trunk/example-frontend

WORKDIR /example-frontend

RUN npm install \
    && npm install -g serve

ENV FRONT_PORT=9090
ENV REACT_APP_BACKEND_URL=http://localhost:8080

RUN npm run build

EXPOSE $FRONT_PORT
ENTRYPOINT serve -s -l $FRONT_PORT build