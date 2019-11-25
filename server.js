const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(router);

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
