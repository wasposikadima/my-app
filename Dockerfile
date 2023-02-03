# docker build -t propokot/servicesrealtorsnuxtjs .
# docker push propokot/servicesrealtorsnuxtjs
# docker run -p 3000:3000 -e "NODE_OPTIONS=--openssl-legacy-provider" snaketbs/servicesrealtorsnuxtjs

FROM node:16-alpine
ENV NODE_OPTIONS "export --openssl-legacy-provider"
ENV APP_ROOT /web

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn install
RUN yarn build

CMD ["yarn", "run", "start"]

######################

#FROM node:latest as build
#
#RUN mkdir -p /var/www/dockerize-nuxt/nuxt-app
#WORKDIR /var/www/dockerize-nuxt/nuxt-app
#
#COPY package*.json ./
#RUN npm install
#
#COPY . .
#
#RUN npm run build
#
#EXPOSE 4000
#
#ENV NUXT_HOST=0.0.0.0
#
#ENV NUXT_PORT=4000
#
#CMD [ "npm", "start" ]

######################

#### STAGE 1: Build ###
#FROM node:latest as build
#ENV NODE_OPTIONS=--openssl-legacy-provider
#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
#COPY package.json /usr/src/app/package.json
#RUN yarn install --silent
#COPY . /usr/src/app
#RUN yarn run generate
#
#### STAGE 2: NGINX ###
#FROM nginx:stable-alpine
#COPY --from=build /usr/src/app/docker /usr/share/nginx/html/
#
#RUN rm -rf /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/conf.d
#COPY default.conf /etc/nginx/conf.d
#
#EXPOSE 4000
#
#ENV NUXT_HOST=0.0.0.0
#ENV NUXT_PORT=4000
#
#CMD ["nginx", "-g", "daemon off;"]


############################

## этап сборки (build stage)
#FROM node:lts-alpine as build-stage
#WORKDIR /usr/src/app
#COPY package*.json ./
#
#RUN apk update
#RUN apk add --no-cache
#
#RUN npm install --only-prod
#COPY . .
#RUN npm run build
#
## этап production (production-stage)
#FROM nginx:stable-alpine as production-stage
##RUN npm /etc/nginx/conf.d/default.conf
##COPY default.conf /etc/nginx/conf.d/default.conf
#COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


## этап сборки (build stage)
#FROM node:lts-alpine as build-stage
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
## этап production (production-stage)
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

#FROM node:lts-alpine
#ENV APP_ROOT /web
#ENV NODE_ENV production
#
#WORKDIR ${APP_ROOT}
#ADD . ${APP_ROOT}
#
#RUN npm ci
#RUN npm run build
#
#CMD ["npm", "run", "start"]

#FROM node:10.16.3
#
#ENV APP_DIR /app/
#WORKDIR ${APP_DIR}
#
#COPY . ./
#RUN yarn install
#
#ENV HOST 0.0.0.0   # Insensitive environment variable
#
#EXPOSE 3000
#
#CMD ["yarn", "prod"]


##build stage for a Node.js application
#FROM node:lts-alpine as build-stage
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
##production stage
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 5000
#CMD ["nginx", "-g", "daemon off;"]

## Dockerfile
#FROM node:11.13.0-alpine
#
## create destination directory
#RUN mkdir -p /usr/src/nuxt-app
#WORKDIR /usr/src/nuxt-app
#
## update and install dependency
#RUN apk update && apk upgrade
#RUN apk add git
#
## copy the app, note .dockerignore
#COPY . /usr/src/nuxt-app/
#RUN npm install
#RUN npm run build
#
#EXPOSE 80
#
##ENV NUXT_HOST=0.0.0.0
##ENV NUXT_PORT=80
#EXPOSE 80
#
#CMD ["nginx", "-g", "daemon off;"]
#CMD [ "npm", "start" ]

#FROM node:14.15.0-alpine3.12
#
#WORKDIR /app
#
#COPY package.json .
#COPY yarn.lock .
#
#RUN yarn install
#
#COPY . .
#
#ENV HOST 0.0.0.0
#EXPOSE 3000
#
#CMD [ "yarn", "dev" ]

## этап сборки (build stage)
#FROM node:lts-alpine as build-stage
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build
#
## этап production (production-stage)
#FROM nginx:stable-alpine as production-stage
#COPY --from=build-stage /app/dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
