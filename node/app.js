const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "challenge_db"

};
const connection = mysql.createConnection(config);

const tableCreationSqlExpression = `CREATE TABLE people(id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))`;
const nameInsertSqlExpression = "INSERT INTO people(name) values('Lucian Augusto')";

connection.query(tableCreationSqlExpression);
connection.query(nameInsertSqlExpression);

app.get("/", (req, res) => {
  let text = "<h1>Full Cycle Rocks!</h1>\n";
  const getNameSql = "SELECT p.name FROM people p";

  connection.query(getNameSql, (err, names) => {
    if (err) throw err;
    names.forEach(nameEntity => {
      text += "<p>" + nameEntity.name + "</p>";
    });
    res.send(text);
  });
});

app.listen(port, () => {
  console.log("Running on port " + port);
});
