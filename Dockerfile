FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8545

# Agrega Healthcheck para mantener contenedor vivo
HEALTHCHECK CMD curl --fail http://localhost:8545 || exit 1

# Ejecuta Hardhat node con host 0.0.0.0 usando bash directamente
ENTRYPOINT bash -c "npx hardhat node --hostname 0.0.0.0 --port 8545"
