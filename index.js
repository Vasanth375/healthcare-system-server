const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

const home = require("./routes/home.route");

app.use("/", home);

app.listen(5001, () => {
  console.log("Running at 5001");
});

