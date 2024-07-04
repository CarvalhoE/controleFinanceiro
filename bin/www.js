#!/usr/bin/env node

/**
 * Module dependencies.
 */

let app = require('../index');
let debug = require('debug')('login:server');
let http = require('http');

/**
 * Normalize a port into a number, string, or false.
 */
normalizePort = (val) =>{
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.port || '8080');

app.set('port', port);

console.log('Server is running on port: ' + port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);

/**
 * Event listener for HTTP server "error" event.
 */

onError = (error) =>{
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
server.on('error', onError);
server.on('listening', onListening);
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}