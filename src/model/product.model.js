import { DataTypes, Model } from "sequelize";
import { sequelize } from "../DB/connection.db.js";

sequelize

export class Product extends Model {}; 

Product.init({
    product_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    product_price:{
        type: DataTypes.FLOAT(10,2), 
        allowNull: false
    },
    is_stock: {
        type: DataTypes.BOOLEAN
    }
},{
    sequelize, 
    modelName: "Product",
})