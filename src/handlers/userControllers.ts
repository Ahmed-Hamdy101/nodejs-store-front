 // create the logic Here controller --------->
 import {_error_general }  from "../errors/errors";


// import model
import {USER_MODEL} from "../model/UserModel";
 
//import express
import {NextFunction, Request,Response } from "express";
 

//import JWT
import jwt from "jsonwebtoken";

// import conig database
import  config from "../config/config";


//create intance from class
const Usermodel = new USER_MODEL();
 

 // ......................................{{ INDEX -- GET ALL USERS IF IT FOUND}}.................................................
export const  GetAllUsers =async (_req:Request, res:Response,next:NextFunction) => {
  // Handdling Error 
    try {
          // call index func
          const findAllUsers = await Usermodel.getAll();
          // return success message of status  200  as response 
          return  res.status(200).json( {status:"Ok Done ! View !",data:{...findAllUsers},message:"This Fine The all user  is retrieved "});          
    }
    catch (error) {
          // next middleware
          next(error)   
    }
}
 // ......................................{{ END GET ALL USERS IF IT FOUND}}.................................................

 
 
// ......................................{{ SHOW -- GET ONE SET USER IF IT FOUND}}.................................................
 
// get one user
// creating express response
export const GetSpecificUser =async (req:Request, res:Response,next:NextFunction) => {
   //  validations 
  const id =req.params.id as unknown as string;
  //  GET ID VALID
  if (id == "" ) {
          return res.send(_error_general.checkIn.GET);
  }
  if (typeof id !== "string" ) {
          return  res.send(_error_general.checkType.CHECKIS_STR);
  }

  try{         
          const findSingleUser =await Usermodel.getUserById(req.params.id as unknown as string); // ?! this parms will be id o get method    
          // return success message of status  200  as response 
          return res.status(200).json({status:"Ok Done ! View !",data:{...findSingleUser},message:"This Fine The  One User is retrieved"}); 
  }catch (error){
          res.status(400).json(error);      
          next(error);
  }
}
// ......................................{{ END SHOW -- GET ONE SET USERS IF IT FOUND}}.................................................


// ......................................{{ CREATE -- CREATE NEW RECORD IN DB}}.................................................
 
// create user
// creating express response
export const CreateRecordUser =async (req:Request, res:Response,next:NextFunction) => {       
  // handdling errors !
  const {f_name,l_name,secret} = req.body;
  
  if (!f_name&&l_name&&secret) {

          if (f_name && l_name && secret == '' ) {
                  return res.send(_error_general.checkIn.POST_ISEMPTY)
          }
          if ( isNaN(parseInt( f_name && l_name)) ){
                  return res.send(_error_general.checkType.CHECKIS_STR)
          }

          if ( typeof f_name && l_name && secret !== 'string' ) {
                  return  res.send(_error_general.checkType.CHECKIS_STR)
          }
          if ( secret.length<6 ) {
                  return  res.send(_error_general.checkIn.PASS)
          }

  }
 
  try{     
          // take requset from the body as post data 
          const UserCreation = await Usermodel.CreateUser(req.body);
          const token = jwt.sign({UserCreation},config.secureToken as unknown as string);
          if(!UserCreation) {
                return res.status(401).json({status:"error",message:"Cannot create token ! or generated"})  
              }
          // this a success message
          return  res.json({status:"Ok!",data:{...UserCreation,token},message:"This Fine The User has been Created and also token "});
 
  }catch (error) {
          res.status(400).json(error);      
          next(error);
  }

}
 // ......................................{{ END  -- CREATE ONE SET  IF IT FOUND}}.................................................


 
// ......................................{{ UPDATE -- UPDAT ONE SET  IF IT FOUND}}.................................................
// creating express response
export const UpdateRecordUser =async (req:Request, res:Response,next:NextFunction) => {
  const id = req.params.id as  unknown as string;
  const {f_name,l_name,secret} =req.body

  if(!f_name&&l_name&&secret) {
          if (f_name && l_name && secret == '' ){return res.send(_error_general.checkIn.POST_ISEMPTY)}
          if ( typeof f_name && l_name && secret !== 'string' ){return  res.send(_error_general.checkType.CHECKIS_STR)}
          if ( secret.length<6 ){return  res.send(_error_general.checkIn.PASS)}
    }
  // VALID ID
  if(id == "" ) {
          return res.send(_error_general.checkIn.GET);
    }
  if(typeof id !== "string" ) {
          return res.send(_error_general.checkType.CHECKIS_STR);
    }
 
  
  try {
          const UserUpdate= await Usermodel.UpdateUser(id,req.body);
          res.status(200).json({status:"Ok!",data:{...UserUpdate},message:"This Fine The User has been updated"});
  }catch(error) {
          res.status(400).json(error);
          next(error);
  }

}
// ......................................{{ END -- UPDATE ONE SET  IF IT FOUND}}.................................................


/*
......................................{{ DELETE -- DELETE ONE SET  IF IT FOUND}}.................................................

*/

export const DeleteUser =async (req:Request, res:Response,next:NextFunction) => {
  const id = req.params.id as  unknown as string;
  // VALID ID
  if (id == "" ) {
          return res.send(_error_general.checkIn.GET);
      }
  if (typeof id !== "string" ) {
          return  res.send(_error_general.checkType.CHECKIS_STR)
      }

  try{
          const UserDeleted =await Usermodel.DeleteUser(req.params.id as unknown as string);   
          return res.status(200).json({status:"Ok Done ! Delete !",data:{...UserDeleted},message:"This Fine The User is deleted"});       
     }catch(error) {
          res.status(400).json(error);      
          next(error)
     }

}
 // ......................................{{ END DELETE --  ONE SET  IF IT FOUND}}.................................................
 

 export const authentication = async (req:Request, res:Response,next:NextFunction) => {
  
  try{
          const {f_name ,passwords}= req.body;
          const userPayload = await Usermodel.verifyAuthSigninUser(f_name,passwords);    
        //   const token = jwt.sign({userPayload},config.secureToken as unknown as string)
        //   if(!userPayload) {
        //     return res.status(401).json({status:"error",message:"user not exist!"})  
        //   }
          return res.status(200).json({status:"success!",data:{...userPayload} ,message:"user is exit"})  
    }catch(error) {
          res.status(400).json(error);      
          next(error);
    }

}
