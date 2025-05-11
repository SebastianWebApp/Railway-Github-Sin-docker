FROM node:22-bullseye
WORKDIR ./
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "start" ]