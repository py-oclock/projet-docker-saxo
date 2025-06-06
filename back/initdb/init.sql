-- Connexion à la base
\connect saxophone

-- Création de la table
DROP TABLE IF EXISTS saxophone;

CREATE TABLE saxophone (
    id SERIAL PRIMARY KEY,
    marque VARCHAR(100),
    modele VARCHAR(100),
    type VARCHAR(50),
    description TEXT,
    prix DECIMAL(10, 2)
);

-- Insertion de données
INSERT INTO saxophone (marque, modele, type, description, prix) VALUES
('Henri SELMER Paris', 'Reference 54', 'Alto', 'Inspiré du légendaire Mark VI, ce saxophone offre un son riche et centré, idéal pour le jazz.', 5800.00),
('Yamaha', 'YAS-875EX Custom EX', 'Alto', 'Connu pour sa réponse douce et sa sonorité riche, ce modèle est prisé des professionnels pour sa projection étonnante.', 4900.00),
('Yanagisawa', 'AWO20', 'Alto', 'Fabriqué en bronze, ce saxophone offre une sonorité chaleureuse et une excellente justesse.', 4600.00),
('Keilwerth', 'SX90R', 'Ténor', 'Avec sa finition en nickel noir et sa gravure faite main, il offre un son puissant et centré.', 6300.00),
('P. Mauriat', 'PMXT-66R', 'Ténor', 'Ses cheminées roulées et son pavillon gravé à la main offrent une sonorité libre et stable dans les graves.', 5200.00),
('Henri SELMER Paris', 'Série III', 'Soprano', 'Offre une excellente justesse et une sonorité claire, avec une ergonomie soignée pour les professionnels.', 5600.00);
