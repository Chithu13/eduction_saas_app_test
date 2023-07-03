FROM node:latest
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install -g sass
COPY . .
CMD ["npm", "start"]