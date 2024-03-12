import { Router } from "express";
import { deleteProduct, getAllProducts, getOneProduct, saveProduct, updateProduct } from "../controller/product.controller.js";
import { validateDeleteProduct, validateId, validateNewProduct, validateUpdateProduct } from "../helpers/validateProduct.js";
export const router = Router(); 

router.get("/products",  getAllProducts); 
router.get("/products/:product_id", validateId() , getOneProduct ); 
router.post("/products", validateNewProduct(),  saveProduct ); 
router.put("/products/:product_id", validateUpdateProduct(),  updateProduct ); 
router.delete("/products/:product_id", validateDeleteProduct(), deleteProduct ); 