FROM swaggerapi/swagger-ui:latest
COPY docs/*.json /usr/share/nginx/html/
COPY swagger/swagger-config.json /usr/share/nginx/html/
ENV CONFIG_URL ./swagger-config.json