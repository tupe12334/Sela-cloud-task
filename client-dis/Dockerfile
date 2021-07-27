FROM node:alpine
RUN npm install -g typescript
RUN npm install -g ts-node
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN npm prune --production
EXPOSE 3000
CMD npm start