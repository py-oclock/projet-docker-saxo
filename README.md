# Projet saxophone
## Problématique
Tout le monde est en télétravail et bosse dans des environnements différents.
Pour reglé ce soucis, on standardise l'env de dev grâce à des volumes / container docker.

## TODO faire le tour du projet avec des snippet / screenshot afin de présenter le fonctionnement de docker et les commandes princpales

## Pour que ca fonctionne

- Remplir un fichier .env à la racine en dupliquant le modèle .env.example
Exemple de contenu:
```
PGUSER=saxophone
PGPASSWORD=saxophone
PGHOST=postgres
PGDATABASE=saxophone
PGPORT=5432
````

- Lancer la commande : `docker compose up --build`
- Se rendre sur http://localhost:5173