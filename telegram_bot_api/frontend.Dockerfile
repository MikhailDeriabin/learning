FROM node:18-bullseye-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir /app && chown -R node:node /app

USER node

WORKDIR /app

COPY --chown=node:node ./frontend/package.json ./package.json
COPY --chown=node:node ./frontend/package-lock.json ./package-lock.json
RUN npm install
COPY --chown=node:node ./frontend .

CMD [ "npm", "run", "start"]