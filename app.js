var path = require("path");
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "/public")));
app.use("/api", require("./routes/api.js"));
app.use("/", require("./routes/index.js"));

app.listen(3000);