const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

// configuraciones
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// middleware
app.use(express.static('public'));

// enrrutadores
const otherRoutes = require ('./routes/other.routes');
const menuRoutes = require ('./routes/menu.routes');

// routes
app.use('/',otherRoutes)
app.use('/detalle', menuRoutes)

// server
app.listen(port,() => console.log(`http://localhost:${port}`));