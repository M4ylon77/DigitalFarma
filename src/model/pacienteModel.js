const mongoose = require("mongoose");

const pacienteModel = new mongoose.Schema({

    nome:String,
    idade:Number,
    medicamento:[{        
        type: mongoose.Schema.Types.String,
        ref: 'medicamento'
      }]
      

});

module.exports= mongoose.model("paciente", pacienteModel);