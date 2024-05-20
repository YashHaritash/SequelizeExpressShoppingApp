const route = require('express').Router()
const User = require('../../db').User

route.get('/',(req,res)=>{
    //we want to send array of all users from our database;
    User.findAll()
    .then((users)=>{
        res.status(200).send(users);
    })
    .catch(err=>{
        res.status(500).send({
            error:"Could Not Retrieve Users" 
        })
    })

})

route.post('/',(req,res)=>{
    // we expect name in body to create new user
    User.create({
        name : req.body.name
    }).then((user)=>{
        res.status(201).send(user);
    }).catch((err)=>{
        res.status(501).send({
            error:"Could Not Add New User" 
        })
    })
})

exports = module.exports = {
    route
}