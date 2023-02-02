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

//Le decimos a nuestra app que cuando se dirijan a la página de registrar
app.post('/registrar', [
    body('nombreyapellido', 'Ingrese un nombre y apellido completo')
        .exists() //Que no esté vacío
        .isLength({min:5}), //Definimos el mínimo de caracteres aceptados

    //Validación del imput email de index.ejs
    body('email', 'Ingrese un Email válido')
        .exists()
        .isEmail(),

    //Validación del input edad
    body('edad', 'Ingrese su edad correcta')
        .exists()
        .isNumeric()
], (req, res)=>{
    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     res.status(400).json({ errors: errors.array()});
    //     console.log(errors)
    // }

    const errors = validationResult(req)
    if (!errors.isEmpty()){
        console.log(req.body)
        const valores = req.body
        const validaciones = errors.array()
        res.render('index', {validaciones: validaciones, valores: valores})
    } else {
        res.send('¡Validación Exitosa!')
    }
})

app.listen(3000, ()=>{
    console.log("Server UP! en http://localhost:3000");
})