# Utiliser l'image officielle Node.js LTS
FROM node:18

# Créer un dossier de travail
WORKDIR /app

# Copier package.json + package-lock.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'app
CMD ["npm", "run", "dev"]
