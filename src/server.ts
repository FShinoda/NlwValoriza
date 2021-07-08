import "reflect-metadata";
import express = require("express");
import './database'; // Não é necessário indicar o index pois é padrao.
import { router } from "./routes";

const server = express();

server.use(express.json());

server.use(router);

server.listen(3000, () => console.log(">> Rodando o servidor"));