const { Console } = require("console");
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => console.log("Successfully Connected!"));

  conn.on('connect', () => conn.write('Name: DPK'));

  conn.on('connect', () => {
    
    for (let i = 0; i < 360; i++) {
  
      setTimeout(() => {
        let dir = 'Move: up';
        console.log(i);
        if (i <= 30) {
          dir = 'Move: down';
        } else if (i > 30 && i <= 60) {
          dir = 'Move: left';
        } else if (i > 60 && i <= 90) {
          dir = 'Move: up';
        } else if (i > 90 && i <= 120) {
          dir = 'Move: right';
        }
        conn.write(dir);
      }, (i * 50));
    }
  });

  conn.on('data', (data) => console.log('Server says: ', data));
  
  return conn;
};


module.exports = {connect};