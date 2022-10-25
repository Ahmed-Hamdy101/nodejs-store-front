//Router-express
import { Router } from "express";
import authenticationMiddleware from "../../Middleware/Auth/auth";
// import controllers
import  * as productControllers from "../../handlers/productControllers";
// create intance from  routes
const ProductRouts = Router();
// add Routers assined to first Endpoint 
ProductRouts.get( '/findAll',authenticationMiddleware,productControllers.GetAllProduct);
ProductRouts.get( '/:id',authenticationMiddleware,productControllers.GetSpecificProductByid)
ProductRouts.route('/create').post(authenticationMiddleware,productControllers.CreateRecordProduct)



export default ProductRouts;