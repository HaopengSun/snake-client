const net = require('net');
const { IP, PORT, name } = require('./constants');

// Establishes connection with the game server
const connect = function() {
  const myname = name;
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write('Name: ' + myname);
  });

  conn.on('connect', () => {
    conn.write('Say: Hello everyone!');
  });
  
  return conn;
}

module.exports = { connect };