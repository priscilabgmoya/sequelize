import { response } from "../helpers/response.js";
import { all, del, one, post, update } from "../service/product.service.js";


export const getAllProducts = async(req, res) =>{
    const {data, error} =await all(); 
    if(error) return response(res,"Error", false, error, 404); 
    return response(res, "all Product", true, data, 200); 
}

export const getOneProduct = async(req, res) =>{
    const {data, error} =await one(req); 
    if(error) return response(res,"Error", false, error, 404); 
    return response(res, "one Product", true, data, 200); 
}

export const saveProduct = async(req, res) =>{
    const {data, error} =await post(req); 
    if(error) return response(res,"Error", false, error, 404); 
    return response(res, "Created Product", true, data, 201); 
}

export const updateProduct = async(req, res) =>{
    const {data, error} =await update(req); 
    if(error) return response(res,"Error", false, error, 404); 
    return response(res, "Update Product", true, data, 200); 
}

export const deleteProduct = async(req, res) =>{
    const {data, error} =await del(req); 
    if(error) return response(res,"Error", false, error, 404); 
    return response(res, "Delete Product", true, data, 200); 
}