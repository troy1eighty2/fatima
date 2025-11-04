FROM node:lts-alpine3.21
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["npm", "run", "start"]
