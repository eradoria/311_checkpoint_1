const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const users = require("./routes/users");
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(users);

app.get("/", (req, res) => res.send("default route"));

app.listen(port, () => {
  console.log("app is listening on:", port);
});
