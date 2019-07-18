var mysql = require("mysql");

// mysql://czbds431umi5x7wo:anjuim08apizt3ra@erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/njfs3dmontnydbrk

    connection = mysql.createConnection({
    host: "erxv1bzckceve5lh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "czbds431umi5x7wo",
    password: "anjuim08apizt3ra",
    port: 3306,
    database: "njfs3dmontnydbrk"
  });


connection.connect(function(err) {
  if (err) {
    console.log("error " + err.stack);
  }

  console.log("connected on thread id: " + connection.threadId);
});

module.exports = connection;
