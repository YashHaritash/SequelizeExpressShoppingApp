const express = require('express');
const app = express();

//handling post request
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//frontend
app.use('/', express.static(__dirname+'/public'))
app.use('/api',require('./routes/api').route)

app.listen(3131,()=>{
    console.log("Server Running on http://localhost:3131");
})