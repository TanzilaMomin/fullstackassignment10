const mongoose = require("mongoose");

const vivosModel = mongoose.model("vivos",{
    title : {type : String},
    model : {type : String},
    description : {type : String},
    price : {type : String}
});

module.exports = vivosModel ;