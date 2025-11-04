FROM node:lts-alpine3.21
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
EXPOSE 3002
# CMD serve -s dist -l 3002
