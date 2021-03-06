let connection;

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'a') {
    connection.write('Move: left');
  } else if (key === 'e') {
    connection.write('Say: YEET!');
  } else if (key === 'f') {
    connection.write('Say: Ello');
  } else if (key === 'x') {
    connection.write('Say: get wrek\'d');
  }

};

const setupInput = function(conn) {
  connection = conn;
  //console.log("setupInput entered");
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = {setupInput};