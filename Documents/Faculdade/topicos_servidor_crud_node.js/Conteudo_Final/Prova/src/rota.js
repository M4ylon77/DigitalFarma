const express = require("express");
const rotas = express.Router();
const path = require("path");
const paciente = require("./controller/pacienteController");
const medicamento = require("./controller/medicamentoController");

//rotas para os dados dos pacientes ! 
rotas.get("/visao", paciente.acesso);
rotas.post("/cadastro", paciente.create);

rotas.get("/lista", paciente.lista);

rotas.get("/listaD", paciente.deleteL);
rotas.post("/deletar/:id", paciente.delete);

rotas.get("/listaUp", paciente.upLista);
rotas.post("/Update/:id", paciente.update);

rotas.get("/home",  (req,res) =>{
  const filePath = path.join(__dirname, "./view/home.html");
  res.sendFile(filePath);
});
////////////////////////////////////////////////////////////////////

//Rotas para os medicamentos
//create
rotas.get("/med", medicamento.acesso);
rotas.post("/cadastrom", medicamento.create);

//listar
rotas.get("/listaM", medicamento.list);

//Delete
rotas.get("/listD", medicamento.listD);
rotas.post("/deleteM/:id", medicamento.delete);

//Update
rotas.get("/listaupM", medicamento.listUp);
rotas.post("/updateM/:id", medicamento.upMedicamento);

///////////////////////////////////////////////////////////////////


module.exports = rotas;