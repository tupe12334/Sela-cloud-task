FROM node:alpine
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run setup
CMD npm start
# RUN npm install 
# COPY . .
# RUN npm run build
# RUN npm prune --production
# EXPOSE 3000
# CMD npm start
