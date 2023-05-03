FROM node:18-alpine AS build

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -Rf /usr/share/nginx/html

COPY --from=build /app/build /usr/share/nginx/html
