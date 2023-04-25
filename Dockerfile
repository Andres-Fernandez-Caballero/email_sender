FROM node:19.6.1-alpine3.17

WORKDIR /app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

ARG PORT=3000

EXPOSE $PORT

CMD ["pnpm", "start"]
