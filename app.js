var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Raghava');
var Product = require('./models/student.js');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/update.html');
});
//Insert
app.post('/insert',function(req,res){
    var data=req.body;
    console.log(data);
    Product.addProduct(data,function(err,result){
    if(result){
response = {
    "result": "Data inserted"
}
res.json(response);
}
else{
    console.log("failed!");
    error = {
        "error" : "Insertion Failed!"
    }
    res.json(error);
}
});
});
app.get('/ret',function(req,res){
    var roll = req.body;
    console.log(roll);
    Product.getProducts(roll,function(err,data){
      if(err){
    res.json({"err":"error"});
      } else{
          console.log(data);
        res.json(data);
        }
    })
})

app.post('/updte',function(req,res){
    var id= req.body._id;
    var ProdName,ProdPrice;
    var data ={
        ProdName : req.body.ProdName,
        ProdPrice : req.body.ProdPrice
    }
    console.log(data);
    Product.updateProduct(id,data,{upsert: true},function(err,data){
       if(err){
           console.log("error!");
    throw err;
      } else{
          console.log("success");
        res.json(data);
      } 
    })
})
app.post('/delete',function(req,res){
    var id = req.body;
    console.log(id);
    Product.removeProduct(id,function(err,data){
        if(err){
            throw err;
        } else{
            console.log("deleted!");
        result ={
            "Message":"Data removed"
        }
        res.json(result);
        }
    })
})
app.listen('9000');
console.log("listening at : 9000");