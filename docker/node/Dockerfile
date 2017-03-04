FROM node:boron

MAINTAINER <eloy@sandboxwebs.com>
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/

RUN npm install

EXPOSE 8000
CMD [ "npm", "start" ]