const express = require ('express');
const bodyParser = require ('body-parser');
const mongojs = require('mongojs');
const db = mongojs('simpleHostel', ['tenant']);
const path = require('path');
const app = express();
const router = require ('./router/index');
const urlencoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
let PORT = process.env.PORT || 2000; 

//Use static public folder
app.use(express.static(path.join(__dirname, "public")));

//Set EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Use Router
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})