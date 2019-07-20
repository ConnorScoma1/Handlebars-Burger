var mysql = require("mysql");

// mysql://czbds431umi5x7wo:anjuim08apizt3ra@erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/njfs3dmontnydbrk
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
    host: "erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "czbds431umi5x7wo",
    password: "anjuim08apizt3ra",
    port: 3306,
    database: "njfs3dmontnydbrk"
  });

}

connection.connect()

module.exports = connection;
