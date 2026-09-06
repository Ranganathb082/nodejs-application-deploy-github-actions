const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({message: "application is running v3.0.2"});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});