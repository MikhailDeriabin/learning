FROM openjdk:21-slim-buster

EXPOSE 8080

WORKDIR /app

RUN apt update \
    && apt install -y git

RUN git clone --branch main --single-branch --depth 1 https://github.com/docker-hy/material-applications.git
WORKDIR ./material-applications/spring-example-project

RUN ./mvnw package

CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]