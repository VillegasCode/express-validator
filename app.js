const express = require('express');
const app = express();

//IMPORTAMOS EL FRAMEWORK EXPRESS-VALIDATOR
const {body, validationResult} = require('express-validator')

//Configuramos la engine template EJS
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

//Configuramos una ruta con petición GET
app.get('/', (req, res)=>{
    res.render('index')
})


app.listen(3000, ()=>{
    console.log("Server UP! en http://localhost:3000");
})