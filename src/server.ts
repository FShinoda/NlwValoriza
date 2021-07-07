import express = require("express");

const server = express();

server.get("/", (req, res) => res.send("rota feita"));

server.post("/post", (req, res) => res.send("metodo post"));

server.listen(3000, () => console.log(">> Rodando o servidor"));