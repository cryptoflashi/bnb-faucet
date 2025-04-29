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

# Expone el puerto 8545 para JSON-RPC
EXPOSE 8545

# Comando que ejecuta Hardhat node
CMD ["npx", "hardhat", "node", "--hostname", "0.0.0.0"]
