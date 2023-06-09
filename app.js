//Je requête dotenv pour pouvoir avoir accès à mes variables d'environnement
require('dotenv').config();
//Je requête express
const express = require('express');
//Je fais appel à mon routeur
const router = require('./app/router.js');
//Je requête cors pour pouvoir donner accès à tous au serveur
const cors = require('cors');

//J'utilise express pour créer mon app
const app = express();

//Je configure mon app pour faire appel à cors
app.use(cors());
app.use(express.urlencoded( {extended : true}));
app.use(express.json());

//Je configure mon app pour accéder au routeur
app.use(router);

//Je branche mon app sur le port que je souhaite utiliser
app.listen(process.env.PORT || 4000);
