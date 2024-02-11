const paciente = require("../model/pacienteModel");
const fs = require("fs");
const path = require("path");
const medicamento = require("../model/medicamentoModel");
const rotas = require("../rota");
const rota = rotas.get
//async acesso(req,res){
    //const filepath = path.join(__dirname, "../view/paciente.html");
    
   // fs.readFile(filepath, (err, data) => {
    
    //res.set("Content-Type", "text/html");
  //  res.send(data);
    
//    });
//  

module.exports = {
    async acesso(req, res) {
        try {
            const Medicamento = await medicamento.find().maxTimeMS(5000); // Define o tempo limite como 5 segundos (5000 milissegundos)
            if (Medicamento.length === 0) {
                console.log("Sem medicamentos!");
                // Retorne uma resposta adequada para a ausência de medicamentos, se necessário
            } else {
                res.render("../view/paciente.ejs", { Medicamento });
            }
        } catch (error) {
            console.error("Erro ao acessar medicamentos:", error);
            // Retorne uma resposta de erro adequada, se necessário
        }
    },
    
    async create(req, res) {
        try {
            const { nome, idade, medicamento } = req.body;
            const criaPacient = await paciente.create({
                nome,
                idade,
                medicamento
            });
            console.log("Paciente " + criaPacient.nome + " criado");
            res.redirect("/home");
        } catch (error) {
            console.error("Erro ao criar paciente:", error);
            // Retorne uma resposta de erro adequada, se necessário
        }
    },

async lista(req,res){

const listapaciente  = await paciente.find();

res.render(('../view/listaPaciente.ejs'), { listapaciente });

},

async deleteL(req,res){
const  listaDelete = await paciente.find();

res.render("../view/deletePaciente", {listaDelete});





},

async delete(req, res){
const {id} = req.params;
const pacienteDelete = await paciente.findByIdAndDelete({_id:id});

console.log("Paciente " + pacienteDelete.nome + " Deletado");
res.redirect("/listaD");


},
async upLista(req,res){
const listaUp = await paciente.find();

res.render("../view/upPaciente", {listaUp});


},
async update(req,res){

    const {id} = req.params;
    const {nome , idade} = req.body;
    const pacienteUp = await paciente.findByIdAndUpdate({_id:id});

    pacienteUp.nome = nome,
    pacienteUp.idade = idade

await pacienteUp.save();

res.redirect("/listaUp");

}





}
