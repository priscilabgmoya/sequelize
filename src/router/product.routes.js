import { Router } from "express";
export const router = Router(); 

router.get("/products", (req, res) =>{
    res.send("I am a Router"); 
} ); 
router.get("/products", (req, res) =>{
    res.send("I am a Router"); 
} ); 
router.post("/products", (req, res) =>{
    res.send("I am a Router"); 
} ); 
router.put("/products", (req, res) =>{
    res.send("I am a Router"); 
} ); 
router.delete("/products", (req, res) =>{
    res.send("I am a Router"); 
} )