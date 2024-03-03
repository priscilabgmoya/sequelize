import { Sequelize } from "sequelize";

const sequelize = new Sequelize('product_test', 'root', '', {
    host: 'localhost',
    dialect:  'mysql' ,
    port: 3306
});
const testConnection = async () =>{
    try {
       await sequelize.authenticate(); 
       console.log("all Good!");
    } catch (error) {
        console.log("All Bad!",error);
    }

}

testConnection(); 