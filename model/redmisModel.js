const mongoose = require("mongoose");

const redmisModel = mongoose.model("redmis",{
    title : {type : String},
    model : {type : String},
    description : {type : String},
    price : {type : String}
});

module.exports = redmisModel ;