const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(3050, () => {
  console.log(
    `(server runing on || server berjalan pada) http://localhost:3050`
  );
});
