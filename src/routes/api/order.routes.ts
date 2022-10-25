//Router-express
import { Router } from "express";
// import controllers
import  * as orderproductControllers from "../../handlers/orderController";

import authenticationMiddleware from "../../Middleware/Auth/auth";

// create intance from  routes
const orderRouts = Router();
// add Routers assined to first Endpoint 
orderRouts.route('/createorder').post( authenticationMiddleware,orderproductControllers.pushOrderFunc);
orderRouts.route('/:pid/Orderproduct').get(authenticationMiddleware ,orderproductControllers.GetOrderproduct);
orderRouts.route('/:Userid').get( authenticationMiddleware,orderproductControllers.GetSpecificOrderByUserid);
orderRouts.route('/:oid').get( authenticationMiddleware,orderproductControllers.GetSpecificOrderByUserid);
orderRouts.route('/:oid/addproductorder').post(authenticationMiddleware ,orderproductControllers.CreateOrderToProduct);

export default orderRouts;