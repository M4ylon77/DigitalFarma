const mongoose = require("mongoose");
const configdb = "mongodb://0.0.0.0:27017/Clinica";

const conexao = mongoose.connect(configdb, {

    useNewUrlParser: true,
    useUnifiedTopology: true




});


module.exports = conexao;