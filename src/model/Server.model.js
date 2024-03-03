import express from "express";
import morgan from "morgan";
import { testConnection } from "../DB/connection.db.js";
import { router } from "../router/product.routes.js";

export class Server {
    constructor() {
        this.app = express();
        this.app.PORT = process.env.PORT || 3000;
        this.middlewares(); 
        this.dbConnection(); 
        this.router(); 
    }
    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(express.json());
    }
    router() {
        this.app.get("/", (req, res)=>{
            res.send("hola mundo!"); 
        }); 
        this.app.use("/api/v1",router); 
    }
    async dbConnection() {
        await testConnection(); 
    }
    listen() {
        this.app.listen(this.app.PORT, () => {
            console.log(`Server running on port ${this.app.PORT}`);
        })
    }
}