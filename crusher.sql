-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 05 oct. 2021 à 18:50
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `crusher`
--

-- --------------------------------------------------------

--
-- Structure de la table `crush`
--

CREATE TABLE `crush` (
  `id` int(11) NOT NULL,
  `DATE` timestamp NOT NULL DEFAULT current_timestamp(),
  `token` varchar(255) NOT NULL,
  `esprit` int(11) NOT NULL,
  `physique` int(11) NOT NULL,
  `fidelite` int(11) NOT NULL,
  `passion` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `userFirstName` varchar(255) NOT NULL,
  `userAge` int(11) NOT NULL,
  `userAstro` varchar(255) NOT NULL,
  `crushName` varchar(255) NOT NULL,
  `crushFirstName` varchar(255) NOT NULL,
  `crushAge` int(11) NOT NULL,
  `crushAstro` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `crush`
--

INSERT INTO `crush` (`id`, `DATE`, `token`, `esprit`, `physique`, `fidelite`, `passion`, `userName`, `userFirstName`, `userAge`, `userAstro`, `crushName`, `crushFirstName`, `crushAge`, `crushAstro`) VALUES
(1, '2021-10-05 15:30:43', 'huynhgianni19gémeauxmorganeclara40verseau', 4, 4, 4, 4, 'Huynh', 'Gianni', 19, 'Gémeaux', 'Morgane', 'Clara', 40, 'Verseau');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `crush`
--
ALTER TABLE `crush`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `token` (`token`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `crush`
--
ALTER TABLE `crush`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
