FROM node:fermium-buster
WORKDIR /app
COPY ["package.json", "package-lock.json*", "yarn.lock", ".git", "./"]
RUN yarn install
COPY . .
CMD ["yarn", "start:dev"]