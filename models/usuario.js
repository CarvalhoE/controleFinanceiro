const { Sequelize } = require("sequelize");
const database = require('../db');

const Users = database.define('users',  {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    sobrenome:{
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING(220),
        allowNull: false,
    },
    senha:{
        type: Sequelize.STRING(60),
        allowNull: false,
    },
    image:{
        type: Sequelize.STRING(220),
        allowNull: false,
    }
});

module.exports = Users;