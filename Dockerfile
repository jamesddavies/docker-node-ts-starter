FROM node:8
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
COPY src ./src
RUN npm install && npm run build
CMD ["node", "dist/index"]