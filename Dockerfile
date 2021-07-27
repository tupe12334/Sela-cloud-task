FROM node:alpine
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run setup
EXPOSE 8080
CMD npm start
