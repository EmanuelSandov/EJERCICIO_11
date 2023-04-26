// Defenir variables
const express = require('express');         //HTTP
const hbs = require('hbs');                 //HTML - Dinamicos   
const bodyParser = require('body-parser');  // Procesar solicitudes de tipo POST 
const port= process.env.PORT || 3000;       //Puerto

const app = express();

app.set('view engine', 'hbs');              // Motor de vistas - HTML Dinamico
hbs.registerPartials(__dirname+'/views/partial',()=>{});

app.use(express.static('public'));          //Middlewere - use
app.use(bodyParser.urlencoded({extended: true}));   //
app.use(bodyParser.json());

app.post('/dashboard',(req, res)=>{
   // res.send('Aqui va el dash');            // Texto
    //res.sendFile('dashboard.html');         //Archivo - HTML
    res.render('dashboard',{
        nombre:"Emanuel Sandoval Muñoz",
        email: "mariovsgoku12@gmail.com"
    });               //Vista dinamica - HTML Dinamico
});

app.get('/login',(req, res)=>{
    res.render('login');
});

app.get('*',(req, res)=>{
    res.render('404');
});

app.listen(port,()=>{
    console.log('El servidor express esta corriendo en el puerto: ', port);
});