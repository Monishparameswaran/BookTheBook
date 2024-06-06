    FROM node:18.20.3-alpine3.20
    WORKDIR /app
    COPY . .
    RUN npm install
    CMD ["npm","run","dev","--","--host"]

    EXPOSE 5173