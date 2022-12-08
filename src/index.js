const express = require("express");
const { v4: uuidV4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

app.post("/account", (req, res) => {
  const { name, cpf } = req.body;
  const id = uuidV4();

  customers.push({
    name,
    cpf,
    id,
    statement: [],
  });

  return res.send(201).send();
});

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});