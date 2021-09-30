//Gianni HUYNH 2021

let esprit;
let physique;
let fidelite;
let sexuelle;
let meName;
let meFirstName;
let crushName;
let crushFirstName;

function nbAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function launchCrush() {
  // On remet les cercles en blanc

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

  //Partie STATS


  if (document.getElementById("nomMe").value != "" && document.getElementById("prenomMe").value != "" 
  && document.getElementById("ageMe").value != "" &&   document.getElementById("astroMe").value != "" 
  && document.getElementById("nomCrush").value != "" &&  document.getElementById("prenomCrush").value != "" &&
  document.getElementById("ageCrush").value != "" && document.getElementById("astroCrush").value != ""){

    esprit = nbAleatoire(0, 4);
  physique = nbAleatoire(0, 4);
  fidelite = nbAleatoire(0, 4);
  sexuelle = nbAleatoire(0, 4);

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

  meName = document.getElementById("nomMe").value;
  meFirstName = document.getElementById("prenomMe").value;
  crushName = document.getElementById("nomCrush").value;
  crushFirstName = document.getElementById("prenomCrush").value;

  Resultat.innerHTML =
  meFirstName +
  " " +
  meName +
  " a un crush pour " +
  crushFirstName +
  " " +
  crushName +
  " ! ✨ Voici les résultats obtenus : ";

  document.getElementById("nomMe").value = "";
  document.getElementById("prenomMe").value = "";
  document.getElementById("ageMe").value = "";
  document.getElementById("astroMe").value = "";
  document.getElementById("nomCrush").value = "";
  document.getElementById("prenomCrush").value = "";
  document.getElementById("ageCrush").value = "";
  document.getElementById("astroCrush").value = "";



  }

  else {
    Resultat.innerHTML = "Opération impossible, veuillez remplir tout les champs afin de calculer les statistiques de compatibilité";

  }

  
  

 
}
