/*Code JS Crusher côté client 👨🏻‍💻
Gianni HUYNH 2021 © - All rights reserved.
*/
const qUrl = `http://crusher-calculator.xyz:7500`; //Addresse sur laquelle on récupère les requêtes

// Fonction permettant de générer un nombre aléatoire entre un interval donné !
function nbAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fonction de calcul des statistiques
function calculStats() {
  return nbAleatoire(0, 4);
}

//Fonction permettant de "vider" les ronds
function clearRounds() {
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
}

//Fonction permettant de coloriser les ronds en fonction des résultats de statistiques obtenus
function colorRounds(esprit, physique, fidelite, passion) {
  let rondUn = "#a10c54";
  let rondDeux = "#b40e5e";
  let rondTrois = "#ce116c";
  let rondQuatre = "#ed147d";
  if (esprit == 1) {
    document.getElementById("EUN").style.backgroundColor = rondUn;
  }

  if (esprit == 2) {
    document.getElementById("EUN").style.backgroundColor = rondUn;
    document.getElementById("EDEUX").style.backgroundColor = rondDeux;
  }

  if (esprit == 3) {
    document.getElementById("EUN").style.backgroundColor = rondUn;
    document.getElementById("EDEUX").style.backgroundColor = rondDeux;
    document.getElementById("ETROIS").style.backgroundColor = rondTrois;
  }

  if (esprit == 4) {
    document.getElementById("EUN").style.backgroundColor = rondUn;
    document.getElementById("EDEUX").style.backgroundColor = rondDeux;
    document.getElementById("ETROIS").style.backgroundColor = rondTrois;
    document.getElementById("EQUATRE").style.backgroundColor = rondQuatre;
  }

  if (physique == 1) {
    document.getElementById("PUN").style.backgroundColor = rondUn;
  }

  if (physique == 2) {
    document.getElementById("PUN").style.backgroundColor = rondUn;
    document.getElementById("PDEUX").style.backgroundColor = rondDeux;
  }

  if (physique == 3) {
    document.getElementById("PUN").style.backgroundColor = rondUn;
    document.getElementById("PDEUX").style.backgroundColor = rondDeux;
    document.getElementById("PTROIS").style.backgroundColor = rondTrois;
  }

  if (physique == 4) {
    document.getElementById("PUN").style.backgroundColor = rondUn;
    document.getElementById("PDEUX").style.backgroundColor = rondDeux;
    document.getElementById("PTROIS").style.backgroundColor = rondTrois;
    document.getElementById("PQUATRE").style.backgroundColor = rondQuatre;
  }

  if (fidelite == 1) {
    document.getElementById("FUN").style.backgroundColor = rondUn;
  }

  if (fidelite == 2) {
    document.getElementById("FUN").style.backgroundColor = rondUn;
    document.getElementById("FDEUX").style.backgroundColor = rondDeux;
  }

  if (fidelite == 3) {
    document.getElementById("FUN").style.backgroundColor = rondUn;
    document.getElementById("FDEUX").style.backgroundColor = rondDeux;
    document.getElementById("FTROIS").style.backgroundColor = rondTrois;
  }

  if (fidelite == 4) {
    document.getElementById("FUN").style.backgroundColor = rondUn;
    document.getElementById("FDEUX").style.backgroundColor = rondDeux;
    document.getElementById("FTROIS").style.backgroundColor = rondTrois;
    document.getElementById("FQUATRE").style.backgroundColor = rondQuatre;
  }

  if (passion == 1) {
    document.getElementById("SUN").style.backgroundColor = rondUn;
  }

  if (passion == 2) {
    document.getElementById("SUN").style.backgroundColor = rondUn;
    document.getElementById("SDEUX").style.backgroundColor = rondDeux;
  }

  if (passion == 3) {
    document.getElementById("SUN").style.backgroundColor = rondUn;
    document.getElementById("SDEUX").style.backgroundColor = rondDeux;
    document.getElementById("STROIS").style.backgroundColor = rondTrois;
  }

  if (passion == 4) {
    document.getElementById("SUN").style.backgroundColor = rondUn;
    document.getElementById("SDEUX").style.backgroundColor = rondDeux;
    document.getElementById("STROIS").style.backgroundColor = rondTrois;
    document.getElementById("SQUATRE").style.backgroundColor = rondQuatre;
  }
}

//Fonction permettant de vider les champs de saisies textuelles
function clearText() {
  document.getElementById("nomMe").value = "";
  document.getElementById("prenomMe").value = "";
  document.getElementById("ageMe").value = "";
  document.getElementById("astroMe").value = "";
  document.getElementById("nomCrush").value = "";
  document.getElementById("prenomCrush").value = "";
  document.getElementById("ageCrush").value = "";
  document.getElementById("astroCrush").value = "";
}

//Fonction affichage message
function showMessage(userFirstName, userName, crushFirstName, crushName) {
  Resultat.innerHTML =
    userFirstName +
    " " +
    userName +
    " a un crush pour " +
    crushFirstName +
    " " +
    crushName +
    " ! ✨";
}

// Fonction de lancement de calcul de compatibilité
function launchCrush() {
  // On restore tout les ronds en Blanc
  clearRounds();
  // On vérifie qu'aucun champs ne soient vides !
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
    // Calcul du Token
    let tempToken = "";

    tempToken =
      document.getElementById("nomMe").value +
      document.getElementById("prenomMe").value +
      document.getElementById("ageMe").value +
      document.getElementById("astroMe").value +
      document.getElementById("nomCrush").value +
      document.getElementById("prenomCrush").value +
      document.getElementById("ageCrush").value +
      document.getElementById("astroCrush").value;

    let token = tempToken.toLowerCase().split(" ").join(""); // <-- Cette variable contient le Token

    // On récupère les informations utilisateurs des champs de textes
    var oReq = new XMLHttpRequest();
    let userName = document.getElementById("nomMe").value;
    let userFirstName = document.getElementById("prenomMe").value;
    let userAge = document.getElementById("ageMe").value;
    let userAstro = document.getElementById("astroMe").value;
    let crushName = document.getElementById("nomCrush").value;
    let crushFirstName = document.getElementById("prenomCrush").value;
    let crushAge = document.getElementById("ageCrush").value;
    let crushAstro = document.getElementById("astroCrush").value;

    // On cherche si le token existe déjà dans la base de données
    oReq.onload = function () {
      var donnee = JSON.parse(this.responseText);

      //Si token non trouvé dans la base de données, on calcule les stats et on les inscrit dans la base de données
      if (donnee.val == 0) {
        var oReqDeux = new XMLHttpRequest();
        let esprit = calculStats();
        let physique = calculStats();
        let fidelite = calculStats();
        let passion = calculStats();
        oReqDeux.onload = function () {
          colorRounds(esprit, physique, fidelite, passion);
        };
        showMessage(userFirstName, userName, crushFirstName, crushName);
        oReqDeux.open(
          "get",
          qUrl +
            "/newLine/" +
            token +
            "/" +
            esprit +
            "/" +
            physique +
            "/" +
            fidelite +
            "/" +
            passion +
            "/" +
            userName +
            "/" +
            userFirstName +
            "/" +
            userAge +
            "/" +
            userAstro +
            "/" +
            crushName +
            "/" +
            crushFirstName +
            "/" +
            crushAge +
            "/" +
            crushAstro,
          true
        );
        oReqDeux.send();
      }

      // Si token déjà présent dans la base de données, on récupère les stats directement danse la base de données
      if (donnee.val == 1) {
        var oReqTrois = new XMLHttpRequest();
        showMessage(userFirstName, userName, crushFirstName, crushName);
        oReqTrois.onload = function () {
          var data = JSON.stringify(this.response);
          let tempEsprit = data.substr(14, 1);
          let tempPhysique = data.substr(29, 1);
          let tempFidelite = data.substr(44, 1);
          let tempPassion = data.substr(58, 1);
          let esprit = parseInt(tempEsprit);
          let physique = parseInt(tempPhysique);
          let fidelite = parseInt(tempFidelite);
          let passion = parseInt(tempPassion);

          colorRounds(esprit, physique, fidelite, passion);
        };

        oReqTrois.open("get", qUrl + "/getStats/" + token, true);
        oReqTrois.send();
      }

      if (donnee.val != 0 && donnee.val != 1) {
        console.log("erreur ! nombre étrange retourné par la base de données");
      }
    };
    oReq.open("get", qUrl + "/getToken/" + token, true);
    oReq.send();

    // On vide les champs de saisies
    clearText();

    //On affiche la zone des stats !
    document.getElementById("affichage").style.display = "block";

    //Si tout les champs ne sont pas remplis par l'utilisateur, impossible de faire le calcul
  } else {
    Resultat.innerHTML =
      "Opération impossible, veuillez remplir tout les champs afin de calculer les statistiques de compatibilité";
  }
}
