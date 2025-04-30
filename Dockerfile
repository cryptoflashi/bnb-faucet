FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8545

HEALTHCHECK CMD curl --fail http://localhost:8545 || exit 1

ENTRYPOINT ["sh", "-c", "npx hardhat node --hostname 0.0.0.0 --port 8545"]
