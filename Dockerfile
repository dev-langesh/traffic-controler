FROM node

WORKDIR /app

COPY package.json .

RUN npm i

COPY . /app

CMD node index