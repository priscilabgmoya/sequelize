import { Product } from "../model/product.model.js";


export const all  = async () =>{
    try {
        const products =await  Product.findAll(); 
        return {data: products}; 
    } catch (error) {
        return {error: error.message}; 
    }
}
export const one  = async (req) =>{
    try {
        const {product_id} = req.params; 
        const product =await  Product.findOne({where:  { product_id: product_id }}); 
        return {data: product}; 
    } catch (error) {
        return {error: error.message}; 
    }
}
export const post  = async (req) =>{
    try {
        await Product.sync(); 
        const {product_name , product_price , is_stock} = req.body; 
        const createProduct = await Product.create({
            product_name: product_name,
            product_price: product_price,
            is_stock: is_stock
        })
        return {data: createProduct}; 
    } catch (error) {
        return {error: error.message}; 
    }
}
export const update  = async (req) =>{
    try {
        const {product_name , product_price , is_stock} = req.body;
        const {product_id} = req.params;  
         const productUpdate = await Product.update({
          product_name: product_name,
          product_price: product_price,
          is_stock: is_stock
      }, {where:{ product_id: product_id }}); 
        return {data: productUpdate}; 
    } catch (error) {
        return {error: error.message}; 
    }
}
export const del  = async (req) =>{
    try {
        const {product_id} = req.params;  
        const deleteProduct = await Product.destroy( {where:{ product_id: product_id }}); 
        return {data: deleteProduct}; 
    } catch (error) {
        return {error: error.message}; 
    }
}