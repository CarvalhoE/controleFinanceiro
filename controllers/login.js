const { Sequelize } = require('sequelize');
const database            = require('../db');

module.exports ={
    async getAll(req, res){
        res.status(200).send({  mensagem: "API WORKING..."}  );
    }
};