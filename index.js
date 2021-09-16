const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  let ind = fs.readFileSync(__dirname + "/index.html");

  res.send(ind);
});

app.listen(8080);

console.log("Listen to 8080");

//res.setHeader("Content-Security-Policy", "script-src http://localhost:8080")
