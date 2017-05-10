var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema({
    _id : {
        type : Number,
        required : true
    },
    ProdName : {
        type : String,
        required : true
    },
    ProdPrice : {
        type : Number,
        required:true
    }
});
//insert
var Product = module.exports = mongoose.model('Products',productSchema);
module.exports.addProduct = function(data,callback){
    Product.create(data,callback);
}
//update
module.exports.updateProduct = function(id,data,options,callback){

var update = {
    ProdName: data.ProdName,
    ProdPrice: data.ProdPrice
}
Product.findOneAndUpdate(id,data,{},callback);
}
module.exports.getProducts = function(id,callback){
    Product.find({_id:id},callback);
}
module.exports.removeProduct = function(id,callback){
    Product.remove(id,callback);
}
