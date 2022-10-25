 // import model
 import {PRODUCT_MODEL} from "../model/ProductModel";
 //import express
 import {NextFunction, Request,Response } from "express";

 import {_error_general }  from "../errors/errors";
 // create controller
 const Productmodel = new PRODUCT_MODEL();
 

 // get All product 
 // ......................................{{ INDEX -- GET ALL}}.................................................

export const  GetAllProduct = async (_req:Request, res:Response) => {     

     try {
          const AllProduct = await Productmodel.getAllProduct();
          res.status(200).json( {status:"Ok Done ! View All!",data:{...AllProduct},message:"This Fine The all product u can see "});          
      } catch (error) {
          res.status(400);
          res.json({ error });           
      }
}
    
 // ......................................{{ END INDEX -- GET ALL}}.................................................

 // ......................................{{ SHOW -- GET ONE SET BY ID}}.................................................

// get product by id


// express response and controller funcions 
export const GetSpecificProductByid =async (req:Request, res:Response) => {    
        const id = req.params.id;
        if(id == "" || undefined && typeof id !== 'string') {
              return res.send(_error_general.checkIn.GET &&_error_general.checkType.CHECKIS_STR)
        }
        try {
              const findSingleProduct =await Productmodel.getProductByUserId(req.params.id as unknown as string);   
              res.status(200).json({status:"Ok Done ! ViewOne !",data:{...findSingleProduct},message:"This Fine The  One Product is retrieved"}); 
              
        } catch (error) {
              res.status(400);
              res.json({ error });
        }
}
 // ......................................{{ END SHOW -- GET ONE SET  BY ID}}.................................................


 // ......................................{{ CREATE --  CREATE ONE RECORDS}}.................................................
// create product
 export const CreateRecordProduct=async (req:Request, res:Response,next:NextFunction) => {

        const {names , price,quantity} = req.body;   
        //  POST VALID
        if (names == '' && price == undefined|| null ) {
              return  res.json(_error_general.checkIn.POST_ISEMPTY)
        }
          
        if ( typeof price == 'string' ) {
              return  res.json(_error_general.checkType.CHECKIS_INT);
        }
          
        if (  price <= 4 ) {
              return  res.json(_error_general.checkType.CHECK_LENWIDTH);
        }
          
        if (  quantity <= 0 ) {
              return  res.json(_error_general.checkType.CHECK_LENWIDTH);
        }
     
        try {
              const ProductCreation = await Productmodel.CreateProduct(req.body);
              res.json({status:"Ok! Done Create Product",data:{...ProductCreation},message:"This Fine The Product has been Created"});
        }catch (error) {
              res.status(400);
              res.json({ error });
        }
}
 // ......................................{{ END CREATE -- CREATE ONE SET/RECORD}}.................................................
