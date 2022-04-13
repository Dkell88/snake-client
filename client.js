const { Console } = require("console");
const net = require("net");
const path = require("./constants");

console.log(path.IP);
console.log(path.port);

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: path.IP,
    port: path.port
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => console.log("Successfully Connected!"));

  conn.on('connect', () => conn.write('Name: DPK'));

  conn.on('connect', () => {
    
  });

  conn.on('data', (data) => console.log('Server says: ', data));
  
  return conn;
};


module.exports = {connect};