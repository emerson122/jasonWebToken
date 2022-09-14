import  express  from "express";
import  dotenv  from "dotenv";
const app = express();
dotenv.config();
app.get('/',(req,res)=>{
    res.send('hola mundo');
});

app.listen(process.env.PORT,()=>{
    
    console.log(`El servidor se esta ejecutando en la direccion http://localhost:${process.env.PORT}`);
})