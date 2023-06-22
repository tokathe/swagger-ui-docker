FROM node:20 AS build
WORKDIR /usr/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM swaggerapi/swagger-ui:latest AS swagger
COPY --from=build /usr/app/docs/*.json /usr/share/nginx/html/
COPY --from=build /usr/app/dist/swagger-config.json /usr/share/nginx/html/
ENV CONFIG_URL ./swagger-config.json