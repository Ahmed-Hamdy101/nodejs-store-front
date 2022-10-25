//import express
import {NextFunction, Request,Response } from "express";
import jwt from "jsonwebtoken";
import ERROR from "../../class/setErrors";
import config from "../../config/config";

const unauthorized =(next:NextFunction)=>{

    const error:ERROR = new Error("ERROR NOT VERIFY TOKEN  ! ");
    error.status = 401;
    next(error) ; 
}

const ValidToken = async (req:Request,_res:Response,next:NextFunction) =>
{
   try {
        // get auth
        const authheader= req.get('Authorization');
       if (authheader) {
         const bearer = authheader.split(' ')[0].toLowerCase();
         const requiretoken = authheader.split(' ')[1];
         if (requiretoken && bearer === 'bearer') {
           const decode = jwt.verify(requiretoken,config.secureToken as unknown as string);
                if(decode){
                    
                    next();
                }else{
                    unauthorized(next);
                }

         }else{
            unauthorized(next);
         }        
       } else {
        // no token 
        unauthorized(next);
       }
        
    }catch (error) {
        unauthorized(next)
    }

};

export default ValidToken;