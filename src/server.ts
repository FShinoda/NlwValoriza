import "reflect-metadata";
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors"; // O express não suporta erros asincronos por isso precisa-se dessa biblioteca
import './database'; // Não é necessário indicar o index pois é padrao.
import { router } from "./routes";

const server = express();

server.use(express.json());

server.use(router);

server.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        return res.status(400).json({error: err.message})
    }

    return res.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })

})

server.listen(3000, () => console.log(">> Rodando o servidor"));