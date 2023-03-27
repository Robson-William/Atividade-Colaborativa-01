FROM node:alpine

WORKDIR /usr/ac01

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
