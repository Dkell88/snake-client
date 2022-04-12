const { Console } = require("console");
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => console.log("Successfully Connected!"));

  conn.on('connect', () => conn.write('Name: DPK'));

  conn.on('data', (data) => console.log('Server says: ', data));
  
  return conn;
};


module.exports = {connect};