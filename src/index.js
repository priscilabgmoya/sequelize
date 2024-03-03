import { app } from "./app/app.js";
import { router } from "./router/product.routes.js";

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
}); 
app.use("/api/v1",router)