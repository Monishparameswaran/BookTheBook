FROM node:18.20.3-alpine3.20 

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build 

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

EXPOSE 5173
