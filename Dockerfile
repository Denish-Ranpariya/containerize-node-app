FROM node:alpine

WORKDIR /usr/nodeapp

#first only moving package.json file to container because when only code changes will be there node_modules will be already in cache
COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]