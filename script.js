// Fichier JavaScript de Crusher
// Créé par Gianni HUYNH 2021 ©

// On commence par déclarer toutes nos variables importantes
let esprit; // <- Contient la valeur d'esprit (entre 0 et 4)
let physique; // <- Contient la valeur physique (entre 0 et 4)
let fidelite; // <- Contient la valeur de fidélité (entre 0 et 4)
let sexuelle; // <- Contient la valeur sexuelle (entre 0 et 4)
let meName; // <- Nom de l'utilisateur
let meFirstName; // <- Prénom de l'utilisateur
let crushName; // <- Nom du Crush
let crushFirstName; // <- Prénom du Crush

// Fonction permettant de générer un nombre aléatoire entre un interval donné !

function nbAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction de lancement de calcul de compatibilité
function launchCrush() {
  // On restore tout les ronds en Blanc dès le début
  document.getElementById("EUN").style.backgroundColor = "white";
  document.getElementById("EDEUX").style.backgroundColor = "white";
  document.getElementById("ETROIS").style.backgroundColor = "white";
  document.getElementById("EQUATRE").style.backgroundColor = "white";
  document.getElementById("PUN").style.backgroundColor = "white";
  document.getElementById("PDEUX").style.backgroundColor = "white";
  document.getElementById("PTROIS").style.backgroundColor = "white";
  document.getElementById("PQUATRE").style.backgroundColor = "white";
  document.getElementById("FUN").style.backgroundColor = "white";
  document.getElementById("FDEUX").style.backgroundColor = "white";
  document.getElementById("FTROIS").style.backgroundColor = "white";
  document.getElementById("FQUATRE").style.backgroundColor = "white";
  document.getElementById("SUN").style.backgroundColor = "white";
  document.getElementById("SDEUX").style.backgroundColor = "white";
  document.getElementById("STROIS").style.backgroundColor = "white";
  document.getElementById("SQUATRE").style.backgroundColor = "white";

  // On vérifie que aucuns champs ne soit vide !
  if (
    document.getElementById("nomMe").value != "" &&
    document.getElementById("prenomMe").value != "" &&
    document.getElementById("ageMe").value != "" &&
    document.getElementById("astroMe").value != "" &&
    document.getElementById("nomCrush").value != "" &&
    document.getElementById("prenomCrush").value != "" &&
    document.getElementById("ageCrush").value != "" &&
    document.getElementById("astroCrush").value != ""
  ) {    
    // On lance le calcul des scores de compatibilité, c'est totalement random mais chuut ;)
    esprit = nbAleatoire(0, 4);
    physique = nbAleatoire(0, 4);
    fidelite = nbAleatoire(0, 4);
    sexuelle = nbAleatoire(0, 4);

    // Génération du token

    let tempToken = "";

    tempToken = document.getElementById("nomMe").value +  document.getElementById("prenomMe").value + document.getElementById("ageMe").value
    + document.getElementById("astroMe").value + document.getElementById("nomCrush").value + document.getElementById("prenomCrush").value
    + document.getElementById("ageCrush").value + document.getElementById("astroCrush").value;

    let token = tempToken.toLowerCase().split(" ").join("");


    // On colorie les cercles en accord avec les scores obtenus
    if (esprit == 1) {
      document.getElementById("EUN").style.backgroundColor = "#ed147d";
    }

    if (esprit == 2) {
      document.getElementById("EUN").style.backgroundColor = "#ed147d";
      document.getElementById("EDEUX").style.backgroundColor = "#ed147d";
    }

    if (esprit == 3) {
      document.getElementById("EUN").style.backgroundColor = "#ed147d";
      document.getElementById("EDEUX").style.backgroundColor = "#ed147d";
      document.getElementById("ETROIS").style.backgroundColor = "#ed147d";
    }

    if (esprit == 4) {
      document.getElementById("EUN").style.backgroundColor = "#ed147d";
      document.getElementById("EDEUX").style.backgroundColor = "#ed147d";
      document.getElementById("ETROIS").style.backgroundColor = "#ed147d";
      document.getElementById("EQUATRE").style.backgroundColor = "#ed147d";
    }

    if (physique == 1) {
      document.getElementById("PUN").style.backgroundColor = "#ed147d";
    }

    if (physique == 2) {
      document.getElementById("PUN").style.backgroundColor = "#ed147d";
      document.getElementById("PDEUX").style.backgroundColor = "#ed147d";
    }

    if (physique == 3) {
      document.getElementById("PUN").style.backgroundColor = "#ed147d";
      document.getElementById("PDEUX").style.backgroundColor = "#ed147d";
      document.getElementById("PTROIS").style.backgroundColor = "#ed147d";
    }

    if (physique == 4) {
      document.getElementById("PUN").style.backgroundColor = "#ed147d";
      document.getElementById("PDEUX").style.backgroundColor = "#ed147d";
      document.getElementById("PTROIS").style.backgroundColor = "#ed147d";
      document.getElementById("PQUATRE").style.backgroundColor = "#ed147d";
    }

    if (fidelite == 1) {
      document.getElementById("FUN").style.backgroundColor = "#ed147d";
    }

    if (fidelite == 2) {
      document.getElementById("FUN").style.backgroundColor = "#ed147d";
      document.getElementById("FDEUX").style.backgroundColor = "#ed147d";
    }

    if (fidelite == 3) {
      document.getElementById("FUN").style.backgroundColor = "#ed147d";
      document.getElementById("FDEUX").style.backgroundColor = "#ed147d";
      document.getElementById("FTROIS").style.backgroundColor = "#ed147d";
    }

    if (fidelite == 4) {
      document.getElementById("FUN").style.backgroundColor = "#ed147d";
      document.getElementById("FDEUX").style.backgroundColor = "#ed147d";
      document.getElementById("FTROIS").style.backgroundColor = "#ed147d";
      document.getElementById("FQUATRE").style.backgroundColor = "#ed147d";
    }

    if (sexuelle == 1) {
      document.getElementById("SUN").style.backgroundColor = "#ed147d";
    }

    if (sexuelle == 2) {
      document.getElementById("SUN").style.backgroundColor = "#ed147d";
      document.getElementById("SDEUX").style.backgroundColor = "#ed147d";
    }

    if (sexuelle == 3) {
      document.getElementById("SUN").style.backgroundColor = "#ed147d";
      document.getElementById("SDEUX").style.backgroundColor = "#ed147d";
      document.getElementById("STROIS").style.backgroundColor = "#ed147d";
    }

    if (sexuelle == 4) {
      document.getElementById("SUN").style.backgroundColor = "#ed147d";
      document.getElementById("SDEUX").style.backgroundColor = "#ed147d";
      document.getElementById("STROIS").style.backgroundColor = "#ed147d";
      document.getElementById("SQUATRE").style.backgroundColor = "#ed147d";
    }

    // On récupère les informations entrées précédement par l'utilisateur
    meName = document.getElementById("nomMe").value;
    meFirstName = document.getElementById("prenomMe").value;
    crushName = document.getElementById("nomCrush").value;
    crushFirstName = document.getElementById("prenomCrush").value;

    //On affiche le message avec le nom de l'utilisateur et des crush.
    Resultat.innerHTML =
      meFirstName +
      " " +
      meName +
      " a un crush pour " +
      crushFirstName +
      " " +
      crushName +
      " ! ✨ Voici les résultats obtenus : " + token;

    // Et on vide les champs de textes !
    document.getElementById("nomMe").value = "";
    document.getElementById("prenomMe").value = "";
    document.getElementById("ageMe").value = "";
    document.getElementById("astroMe").value = "";
    document.getElementById("nomCrush").value = "";
    document.getElementById("prenomCrush").value = "";
    document.getElementById("ageCrush").value = "";
    document.getElementById("astroCrush").value = "";
  }

  // Si tout les champs  ne sont pas remplis
  else {
    Resultat.innerHTML =
      "Opération impossible, veuillez remplir tout les champs afin de calculer les statistiques de compatibilité";
  }
}
