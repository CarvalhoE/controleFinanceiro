const express       = require('express');
const http          = require('http');
const path          = require ('path');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=> {
    res.send('<h1>teste</h1>');
});

module.exports = app;