# Usa imagen oficial de Node.js
FROM node:18

# Crea directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto JSON-RPC
EXPOSE 8545

# Agrega healthcheck para que Railway sepa que está vivo
HEALTHCHECK CMD curl --fail http://localhost:8545 || exit 1

# Ejecuta el nodo
CMD ["npx", "hardhat", "node", "--hostname", "0.0.0.0", "--port", "8545"]
