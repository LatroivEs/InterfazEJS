const express = require('express');
const app = express();
const path=require("path");

const port = 5317;


app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// rooms page crud
app.get('/rooms', function(req, res) {
  res.render('pages/rooms');
});

// login page
app.get('/login', function(req, res) {
    res.render('pages/login');
  });

//api
app.post('/api/agregarCliente', async(req,res) =>{

  try {
      console.log("body: "+req.body)
      console.log("params: "+req.body)
      const { nombre, apellidos, edad, email} = req.body;

      if(nombre === undefined ||apellidos === undefined ||edad === undefined ||email === undefined){
              res.status(400).json({message:"Bad Request. Please fill all fields."});
      }else{
              res.status(200).json({message:"Campos no Vacios, necesario implementar inserccion"})
      }
  } catch (error) {
      res.status(500);
      res.send(error.message)    
  } 
})

// about page
//app.get('/about', function(req, res) {
//  res.render('pages/about');
//});

app.listen(port);
console.log('Server is listening on port '+ port);