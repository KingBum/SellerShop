const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {type : String, required : true, unique: true},
    desc : {type : String ,required : true},
    photo : {type : String},
    price : {type : Number, required : true},
    creator : {type : Object, required : true},
    owner : {type : Object} ,
    categories : {type : Array},
    attr : {type: Object},
    like : {type : Array}
}, {timestamps : true})

module.exports = mongoose.model("Product", ProductSchema)