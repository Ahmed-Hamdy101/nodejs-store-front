//import model
 import {Order_MODEL} from "../model/orderProductModel";
//import productTypes

 //import express
 import {NextFunction, Request,Response } from "express";

 // create controller
 const orderProductmodel = new Order_MODEL();

//  
import _ERROR_ from "../Middleware/errorMiddleware" 
 
// create the logic Here controller --------->
import {_error_general }  from "../errors/errors";


//_______________________________________________________{{get-order by userid}}_______________________________________________________
    
// get-order by userid
 export const GetSpecificOrderByUserid =async (req:Request, res:Response,next:NextFunction) => {
 
        const id = req.params.Userid as unknown as string;
        // if (id == null  && undefined && "") {      
        //       res.json({status:420,message:`Query string is empty of ${id}`})
        // }
      
        try {
              const findSingleOrderByUserId =await orderProductmodel.getOrdertByUserId(req.params.Userid as unknown as string);   
              res.status(200).json({status:"Ok Done ! ViewOne !",data:{...findSingleOrderByUserId},message:"This Fine The  One order is retrieved"});   
        }catch (error) {
          res.status(400).json(error);      
          next(error);
 
        }
}

//_________________________________________________________{{get-order-product by Orderid}}_____________________________________________________
//_______________________________________________________{{get-order by userid}}_______________________________________________________
    
// get-order by userid
 export const GetOrderByOid =async (req:Request, res:Response,next:NextFunction) => {
 
        const id = req.params.oid as unknown as string;
        // if (id == null  && undefined && "") {      
        //       res.json({status:420,message:`Query string is empty of ${id}`})
        // }
      
        try {
              const findSingleOrderByUserId =await orderProductmodel.getOrdertByUserId(req.params.oid as unknown as string);   
              res.status(200).json({status:"Ok Done ! ViewOne !",data:{...findSingleOrderByUserId},message:"This Fine The  One order is retrieved"});   
        }catch (error) {
          res.status(400).json(error);      
          next(error);
 
        }
}

//_________________________________________________________{{get-order-product by Orderid}}_____________________________________________________

//get-order-product by Orderid
export const GetOrderproduct =async (req:Request, res:Response,next:NextFunction) => {
        //store the id that come from Query string-id 
        const id = req.params.oid as unknown as string;
        //validations
        // if (id == null  && undefined && "") {
        //   res.json({status:420,message:`Query string is empty of ${id}`})
        // }

        try {
             const findSingleOrderById =await orderProductmodel.getOrdertProductByOrderId(req.params.pid as unknown as string);   
             res.status(200).json({status:"Ok Done ! ViewOne !",data:{...findSingleOrderById},message:"This Fine The  One order is retrieved"}); 
          
        } catch (error) {
          res.status(400).json(error);      
          next(error);
 
        }
}

//____________________________________________________________{{add-order-functionility}}__________________________________________________

// add-order-functionility
export const pushOrderFunc = async (req:Request, res:Response,next:NextFunction) => {
     try {
          //handling errors
            const orderCreation = await orderProductmodel.addOrderfunctionality( req.body);
          // return json error message detail
            res.json({status:"Ok! Done Create order",data:{...orderCreation},message:"This Fine The order is set on the user"});
        }catch (error) {
            res.status(400).json(error);      
            next(error);

        }
}

//____________________________________________{{ create-order-product }}__________________________________________________________________

// create-order-product
export const CreateOrderToProduct=async (req:Request, res:Response,next:NextFunction) => {
        // parm for orderID 
        const orderid = req.params.oid as unknown as string;
        // validations
        // if(orderid == "" ||undefined ) {
        //   return res.send(_error_general.checkIn.GET);
        // }
        // handling errors
        try {
        const ProductCreation = await orderProductmodel.CreateProductToOrder( orderid,req.body);
        res.json({status:"Ok! Done add order by Orderid",data:{...ProductCreation},message:"This Fine The order has been Created"});

        } catch (error) {
            next(error);
        }
}

