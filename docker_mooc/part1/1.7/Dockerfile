FROM ubuntu:20.04

RUN apt-get update \
    && apt-get -y install curl

WORKDIR /app
COPY ./script.sh .
RUN chmod +r ./script.sh

CMD ["bash", "./script.sh"]