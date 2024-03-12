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
        const createProduct = await Product.create( req.body)
        return {data: createProduct}; 
    } catch (error) {
        return {error: error.message}; 
    }
}
export const update  = async (req) =>{
    try {
        const {product_id} = req.params;  
         const productUpdate = await Product.update(req.body, {where:{ product_id: product_id }}); 
        return {data: productUpdate}; 
    } catch (error) {
        return {error: error.message}; 
    }
}
export const del  = async (req) =>{
    try {
        const {product_id} = req.params;  
        const deleteProduct = await Product.update( req.body , {where:{ product_id: product_id }}); 
        return {data: deleteProduct}; 
    } catch (error) {
        return {error: error.message}; 
    }
}