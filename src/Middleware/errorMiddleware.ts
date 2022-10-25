//express routes
import { Request , Response ,NextFunction}  from "express";
//import accessibles for class
import Error from "../class/setErrors";

//Create Middleware Errors
const _Errors_ = (error:Error,_req:Request,res:Response,_next:NextFunction)=>{
//set status and message error
const status = error.status || 500;
const message = error.message || "Something goes wrong !";
return res.status(status).json({status,message});
}
;

export default _Errors_;




