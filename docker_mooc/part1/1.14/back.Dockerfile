FROM golang:1.16

RUN apt update \
    && apt install -y subversion

RUN svn checkout https://github.com/docker-hy/material-applications/trunk/example-backend

WORKDIR ./example-backend

RUN go build

ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:9090

EXPOSE $PORT
ENTRYPOINT ["./server"]