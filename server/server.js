const express = require("express");
const path = require("path");
const os = require("os");

const app = express();
const PORT = 4000;

app.use(express.static(path.join(__dirname, "..", "public/")));

app.get("/getUsername", (req, res, next) => {
  res.send({
    username: os.userInfo().username
  });
});

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);
});
