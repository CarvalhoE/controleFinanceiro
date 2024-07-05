const express       = require('express');
const http          = require('http');
const path          = require ('path');
const session       = require('express-session');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const { Sequelize } = require("sequelize");

const app = express();

const login_route = require('./routes/login');
const user_route = require('./routes/usuario');

app.use(login_route);
app.use(user_route);

app.use("/login", login_route);
app.use("/usuarios", user_route);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;