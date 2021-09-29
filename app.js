const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();


const viewsPath = path.join(__dirname, 'templates/views');
const partialsPath = path.join(__dirname, 'templates/partials');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.get('', (req, res) => {
  res.render('index');
});

app.get('/contacto', (req, res) => {
  res.render('contacto');
});

app.get('/cookiespolicy', (req, res) => {
  res.render('cookiespolicy');
});

app.get('/privacypolicy', (req, res) => {
  res.render('privacypolicy');
});

app.get('/legalwarning', (req, res) => {
  res.render('legalwarning');
});

app.listen(3000, () => { console.log('Conexion exitosa'); });

