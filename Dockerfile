FROM node
EXPOSE 3000
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org
ENTRYPOINT npm start