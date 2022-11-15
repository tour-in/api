const port = process.env.PORT || 3000;

const express = require("express");
var bodyParser = require("body-parser");
const app = express();

const routes = require("./src/routes/index.js");

app.use(bodyParser.json({ type: "application/*+json" }));

routes(app);

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
