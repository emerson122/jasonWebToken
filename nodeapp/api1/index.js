const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get("/api", (req,res) =>{
    res.json({
        mensaje: "Nodejs funcionando"
    });
});
app.post("/api/login", (req,res) =>{
    //en este caso se crea un jason falso con una constante pero en produccion 
    //1. traer desde la base de datos, los datos
    //2. verificar en la base de datos en la base de datos
    const user = {
        id:1,
        nombre: "Henry",
        email: "henry@email.com"
    }
    // cuando el usuario entre a su cuenta entoces se crea un nuevo token debe ser creado
    // para indentificar a dicho usuario
    jwt.sign({user: user },'tecnobot',{expiresIn: '32s'}, (err,token)=>{
        res.json({
            token: token
        })
    }) 
    /******************************************************* */
});

//funcion para almacenar el token
function verificarToken(req,res,next) {
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){ //si es diferente de undefined significa diferente de vacio
       const bearetoken = bearerHeader.split(' ')[1] //el toque esta en la posicion 1
       req.token = bearetoken;
       next();
    }else{
        res.sendStatus(403); //acceso prohibido
    }
};

app.post("/api/posts", verificarToken, (req,res) =>{
    //acceder a ruta siempre y cuando usuario tenga un token
    jwt.verify(req.token,'tecnobot', (error,authData)=>{
        if(error){
            res.sendStatus(403); //acceso prohibido
        }else{
            res.json({
                mensaje: "POSTS FUE CREADO",
                authData: authData
            })
        }
    })
  
});



app.listen(3000,function(){
    console.log('El servidor esta prendido jaja');
})