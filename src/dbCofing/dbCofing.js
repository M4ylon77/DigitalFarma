const mongoose = require("mongoose");
//const configdb = "mongodb://0.0.0.0:27017/Clinica";

//const configdb =  "mongodb+srv://Maylon77:153987@cluster0.rh84gdu.mongodb.net/farma?retryWrites=true&w=majority";

const configDb = process.env.MONGODB_CONNECT_URI;


 

const conexao = () => {
    
    mongoose.connect(configDb);
    
mongoose.connection.on("error", ()=>{
    console.error("erro ao conectar com o mongoDB")

})

mongoose.connection.on("open", () => {

    console.log("conectado com o mongoDB")

})



}

conexao()

module.exports = conexao;