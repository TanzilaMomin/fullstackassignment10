const mongoose = require("mongoose");

const samsungsModel = mongoose.model("samsungs",{
    title : {type : String},
    model : {type : String},
    description : {type : String},
    price : {type : String}
});

module.exports = samsungsModel ;