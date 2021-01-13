// Stores the active TCP connection object.
let connection;
// Setup User Interface 
// Specifically, so that we can handle user input via stdin
const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;

  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  stdin.on('data', (key) => {
    if (key === 'w'){
      connection.write('Move: up');;
    }
  });

  stdin.on('data', (key) => {
    if (key === 'a'){
      connection.write('Move: left');;
    }
  });

  stdin.on('data', (key) => {
    if (key === 's'){
      connection.write('Move: down');;
    }
  });

  stdin.on('data', (key) => {
    if (key === 'd'){
      connection.write('Move: right');;
    }
  });

  return stdin;
};

// Since handleUserInput is only needed by setupInput
// and does not need to be called or referenced elsewhere,
// we don't need it exported by the input module.
module.exports = { setupInput };