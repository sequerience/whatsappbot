FROM node:alpine3.20

WORKDIR /app

# Копируем package.json и package-lock.json (если есть) внутрь контейнера
COPY package*.json /app

RUN npm install --production

COPY . .

ENV PORT 3000

EXPOSE $PORT


CMD ["node", "index.js"]