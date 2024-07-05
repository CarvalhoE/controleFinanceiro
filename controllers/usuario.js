"use strict";
const { Sequelize } = require('sequelize');
const sequelize = require('../db');

(async () =>{
    const database = require('../db');
    const usuario = require('../models/usuario');
    await database.sync();

    //Creating a new user;
    const novoUsuario = await usuario.create({
        nome:
            'cadastronometodo'
        ,sobrenome:
            'cadastronometodo'
        ,email:
            'cadastronometodo@gmail.com'
        ,senha:'cadastronometodo'
        ,image:'cadastronometodo'
    });

    console.log(novoUsuario);
    console.log('Create Working.....');

    //Select * From users;
    const usuarios = await usuario.findAll();
    //             = awawit usuario.findByPk(1) #if wanted to select by Pk;
    console.log(usuarios);
    console.log('Read Working.....');

    //Uptading a user data;
    const alteraUsuario = await usuario.update(
        {nome   : 'teste_alteracao_nova'},
        {where  : { id: 1}}
    );

    console.log(alteraUsuario);    
    console.log('Updating Working.....');

})();

//Exporting all users
module.exports = { 
    
    async getAll(req, res){
        
    const database = require('../db');
    const usuario = require('../models/usuario');
    await database.sync();
        
    const usuarios = await usuario.findAll();
    res.status(200).send(usuarios);
    }
}