const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

//app.use("/", routes());
app.use("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Express server listening on http://localhost:${port}`);
});
