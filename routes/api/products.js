const { error } = require('console');

const route = require('express').Router();
const Product = require('../../db').Product

route.get('/',(req,res)=>{
    // Get all products
    Product.findAll()
    .then((products)=>{
        res.status(200).send(products);
    })
    .catch((err)=>{
        res.status(500).send({
            error : "Could not retrieve Products"
        })
    })

})

route.post('/',(req,res)=>{
    //validate the values
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error : "Price is not in valid format"
        })
    }
    // Add new product
    Product.create({
        name :req.body.name,
        manufacturer : req.body.manufacturer,
        //in req body everything gets parsed into string
        price : parseFloat(req.body.price)
    })
    .then((product)=>{
        res.status(201).send(product);
    })
    .catch(err => {
        res.status(501).send({
            error : "Error Adding Product"
        })
    })

})

exports = module.exports = {
    route
}