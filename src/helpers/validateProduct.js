import { body ,check} from 'express-validator'; 
import { validateFields } from "../middlewares/validateFields.js";


 export function validateNewProduct() {
    return [
        body ("product_name", "Product name is required").isString().notEmpty(),
        body ("product_price", "Product price is required").isFloat().notEmpty(),
        body ("is_stock", "Product stock is required").isBoolean().notEmpty(),
        validateFields
    ]
}
export function validateUpdateProduct() {
    return [
        check ("product_id", "Product id is required").isUUID().notEmpty(), 
        body ("product_name", "Product name is required").isString().notEmpty(),
        body ("product_price", "Product price is required").isFloat().notEmpty(),
        body ("is_stock", "Product stock is required").isBoolean().notEmpty(),
        validateFields
    ]
}
export function validateId() {
    return [
        check ("product_id", "Product id is required").isUUID().notEmpty(),
        validateFields
    ]
}