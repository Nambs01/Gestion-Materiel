const express = require("express");
const dotenv = require("dotenv");
const accessAPI = require("./config/accessApi");

dotenv.config();
const materielRoute = require("./router/materiel.router");

const app = express();

const port = process.env.API_PORT;

app.use(express.json());
app.use(accessAPI);
app.use(materielRoute);

app.listen(port, () => {
  console.log(`Serveur est sur le port ${port}`);
});
