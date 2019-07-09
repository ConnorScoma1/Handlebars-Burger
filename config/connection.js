var mysql = require("mysql");

connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "54377Sco",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.log("error " + err.stack);
  }

  console.log("connected on thread id: " + connection.treadId);
});

module.exports = connection;
