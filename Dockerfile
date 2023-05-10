FROM node:14-alpine3.12
WORKDIR /usr/src/app
RUN npm init -y
RUN npm install
RUN npm install express
RUN npm install ejs
COPY . .
EXPOSE 3050
CMD [ "npm", "run", "start"]