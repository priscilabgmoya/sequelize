import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('product_test', 'root', '1234', {
    host: 'localhost',
    dialect:  'mariadb' ,
});
export const testConnection = async () =>{
    try {
       await sequelize.authenticate(); 
       console.log("all Good!");
    } catch (error) {
        console.log("All Bad!",error);
    }

}

