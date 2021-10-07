/*Code JS Crusher côté serveur 🗄️
Gianni HUYNH 2021 © - All rights reserved.
*/

var mysql = require("mysql");
var express = require("express");
var app = express();
const port = 7500;
var cors = require("cors");

app.listen(port);

console.log("Waiting for request ...");

var conn = mysql.createConnection({
  database: "crusher",
  host: "localhost",
  user: "root",
  password: "",
});
app.use(cors({ origin: "http://127.0.0.1:5500" })); //Définition de l'autorisation de requêtes http

// Requête Token (Etape 1)
app.get("/getToken/:token", function (req, res) {
  conn.connect(function (err) {
    console.log("Request Detected ! (code 1)");
    let token = req.params.token;

    // Cherche une colonne en fonction d'un token
    var sql1 =
      "SELECT COUNT(*) AS val FROM crush WHERE token = '" + token + "'";

    conn.query(sql1, function (err, results) {
      if (err) throw err;
      res.send(JSON.stringify(results[0]));
      console.log(JSON.stringify(results[0]));
    });
  });

  res.end;
});

// Requete créer nouvelle entrée (étape 2)

app.get(
  "/newLine/:token/:esprit/:physique/:fidelite/:passion/:userName/:userFirstName/:userAge/:userAstro/:crushName/:crushFirstName/:crushAge/:crushAstro",
  function (req, res) {
    conn.connect(function (err) {
      console.log("Request Detected ! (code 2)");
      let token = req.params.token;
      let newEsprit = req.params.esprit;
      let newPhysique = req.params.physique;
      let newFidelite = req.params.fidelite;
      let newPassion = req.params.passion;
      let userName = req.params.userName;
      let userFirstName = req.params.userFirstName;
      let userAge = req.params.userAge;
      let userAstro = req.params.userAstro;
      let crushName = req.params.crushName;
      let crushFirstName = req.params.crushFirstName;
      let crushAge = req.params.crushAge;
      let crushAstro = req.params.crushAstro;
      var sql1 =
        "INSERT INTO crush(token, esprit, physique, fidelite, passion, userName, userFirstName, userAge, userAstro, crushName, crushFirstName, crushAge, crushAstro) VALUES ('" +
        token +
        "','" +
        newEsprit +
        "','" +
        newPhysique +
        "','" +
        newFidelite +
        "','" +
        newPassion +
        "','" +
        userName +
        "','" +
        userFirstName +
        "','" +
        userAge +
        "','" +
        userAstro +
        "','" +
        crushName +
        "','" +
        crushFirstName +
        "','" +
        crushAge +
        "','" +
        crushAstro +
        "')";

      conn.query(sql1, function (err, results) {
        if (err) throw err;
        res.send(JSON.stringify(results));
        console.log(JSON.stringify(results));
      });
    });

    res.end;
  }
);

// Requête récupérer stats d'un token (étape 3)
app.get("/getStats/:token", function (req, res) {
  conn.connect(function (err) {
    console.log("Request Detected ! (code 3)");
    let token = req.params.token;

    var sql1 =
      "SELECT esprit, physique, fidelite, passion FROM crush WHERE token = '" +
      token +
      "'";

    conn.query(sql1, function (err, results) {
      if (err) throw err;
      res.send(JSON.stringify(results));
      console.log(JSON.stringify(results));
    });
  });

  res.end;
});
