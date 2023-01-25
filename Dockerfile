FROM node:16.10.0-alpine AS build

WORKDIR /app

COPY package.json ./

# RUN ls -al
RUN npm install

COPY . .

RUN npm run build

#create nginx server
FROM nginx:1.9.15-alpine AS prod-stage

COPY --from=build /app/build usr/share/nginx/html

EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]