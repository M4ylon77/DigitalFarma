const medicamento = require("../model/medicamentoModel");
const fs = require("fs");
const path = require("path");

module.exports = {

async acesso(req,res){
const filepath = path.join(__dirname, "../view/medicamento.html");

fs.readFile(filepath, (err, dados)=>{

if(err){
    console.log("deu ruim no codigo mano!");
    print("deu erro mano");
}else{
    res.set('Content-Type', 'text/html');
    res.send(dados);
}


});



},

async create(req,res){
const {nome , nivel} = req.body;
const cadstroMed = await medicamento.create({

nome,
nivel


});
console.log("Medicamento " + cadstroMed.nome + " Cadastrado com sucesso");
res.redirect("/home");

},

async list(req,res){

const listaMedicamento = await medicamento.find();

res.render("../view/listaMedicamento", {listaMedicamento});


},

async listD(req,res){
const medicamentoDLista = await medicamento.find();

res.render("../view/deleteMedicamento", {medicamentoDLista});


},

async delete(req,res){
const {id} = req.params;

const medicamentoDelete = await medicamento.findByIdAndDelete({_id: id});

console.log("Medicamento " + medicamentoDelete.nome + " deletado com sucesso!");

res.redirect("/listD");

},

async listUp(req,res){
const listaUp = await medicamento.find();


res.render("../view/upMedicamento", {listaUp});

},

async upMedicamento(req,res){
const {id} = req.params;
const {nome,nivel} = req.body;
const upMedicamento = await medicamento.findByIdAndUpdate({_id: id});

upMedicamento.nome = nome,
upMedicamento.nivel = nivel

upMedicamento.save();

res.redirect("/listaupM");


}




}