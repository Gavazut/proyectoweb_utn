require('./node_modules/dotenv/lib/main').config();
const express = require('express');
const app =express();
const hbs = require('hbs');
const port = 3000; 


//Handlebars
app.set ('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');


//middlewares
app.use("/assets", express.static(__dirname + "/public"))
app.use(express.urlencoded({ extended: false }));
app.use(require('./router/router'));
app.use(require('./router/contacto'));
app.use(require('./router/server.js'));

app.listen(port, () => {
console.log(`Usando el puerto http://localhost:${port}`);
});
          