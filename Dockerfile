FROM node:24-slim
EXPOSE 3000

WORKDIR /home/node/app

COPY package.json ./
RUN npm install --production=true

COPY . .

ENV NODE_ENV=production

CMD ["npm", "start"]