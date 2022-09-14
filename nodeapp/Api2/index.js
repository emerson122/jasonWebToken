const express = require('express');
const moongoose = require('mongoose'); //base de datos
const bodyparser = require('body-parser'); //para capturar el body
require('dotenv').config() //configuracion para las variables de entorno

const app = express();

//capturar body (caoturar el cuerpo)
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());


// conexion a la base de datos 

// importar rutas
const authRoutes = require('./routes/auth');

// Rutas middlewares
app.use('/api/user', authRoutes);
app.get('/',(req,res)=>{
    res.json({
        estado: true,
        mensaje: 'funciona :o'
    })
});


// iniciar server 

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor andando en: http://localhost:${PORT}`);
})