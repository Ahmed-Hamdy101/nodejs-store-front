//import express
import {NextFunction, Request,Response } from "express";
import jwt from "jsonwebtoken";
import Cerror from "../../class/setErrors";
import config from "../../config/config";

const unauthorized =(next:NextFunction)=>{

    const error:Cerror = new Error("ERROR NOT VERIFY TOKEN  ! ");
    error.status = 401;
    next(error) ; 
}

const AVToken = async (req:Request,_res:Response,next:NextFunction) =>
{
   try {
        // get auth
        const authheader= req.get('Authorization') as string;

        switch (authheader) {
            case  authheader :
                const bearer = authheader.substring( 0,  authheader.indexOf(' ')).toLowerCase();
                const token = authheader.substring( authheader.indexOf(' ')+1,authheader.length);
               if ((token && bearer).includes('bearer')) {
                 const jwtverify = jwt.verify(token,config.secureToken as unknown as string);
                 jwtverify ? next() : unauthorized(next)  
               } else{
                  unauthorized(next);
               }   
                break;
        
            default:
                unauthorized(next);
                break;
        }
    }  // end try catch
       catch (error) {
                unauthorized(next)
            }
            
        }


 
export default AVToken;

