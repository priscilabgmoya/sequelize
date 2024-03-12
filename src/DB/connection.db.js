import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
    host: process.env.HOST,
    dialect:  'mysql' ,
});
export const testConnection = async () =>{
    try {
       await sequelize.authenticate(); 
       console.log("all Good!");
    } catch (error) {
        console.log("All Bad!",error);
    }

}

