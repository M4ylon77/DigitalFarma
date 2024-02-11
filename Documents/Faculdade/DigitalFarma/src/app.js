

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");

const rotas = require("./rota");

require("./dbCofing/dbCofing");

app.set("view engine", "ejs");

app.use(express.static("./view"));
app.set("views", path.join(__dirname, "./view"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.json());
app.use(rotas);

app.listen(8081);







