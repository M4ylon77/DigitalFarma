const mongoose = require("mongoose");

const medicamentoModel = new mongoose.Schema({

    nome:String,
    nivel:Number

});


module.exports = mongoose.model("medicamento", medicamentoModel);

