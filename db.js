/*const mysql = require('mysql2');

try {
  // create the connection to database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'controle_financeiro',
    multipleStatements: true
  });

  // execute will internally call prepare and query
  connection.execute(
    'SELECT * FROM `usuarios`',
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
  // execute will internally call prepare and query
  
  console.log('Banco de dados local conectado com sucesso!');
} catch (err) {
  console.log(err);
}
 */

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('controle_financeiro', 'root', 'root', {
  host    : 'localhost',
  dialect : 'mysql',
  port    : 3306
  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle''' */
});

module.exports = sequelize;