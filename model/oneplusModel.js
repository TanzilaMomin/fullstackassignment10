const mongoose = require("mongoose");

const oneplusModel = mongoose.model("oneplus",{
    title : {type : String},
    model : {type : String},
    description : {type : String},
    price : {type : String}
});

module.exports = oneplusModel ;