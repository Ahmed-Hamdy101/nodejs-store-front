//Router-express
import { Router ,Request ,Response} from "express";
//userApi
import  usrRouts from "./api/user.routes";
//productApi
import  prodRouts from "./api/product.routes";
//orderApi
import  orderprodRouts from "./api/order.routes";

// create intance from  routes
const endPointRoutes = Router();

// add Routers assined to second Endpoint 
endPointRoutes.use('/user',usrRouts);
endPointRoutes.use('/products',prodRouts);
endPointRoutes.use('/orders',orderprodRouts);


//send messge to server with Router error
endPointRoutes.get('/error-404', ( _req: Request, res: Response) => {
    res.send(
      ` <h1 style='color:red;text-align:center'> Error BAD REQUEST 404 </h1> <br><p style='color:red;text-align:center'>Sorry ,Unknown Router Check from the name  as well </p><hr> `
    )
    res.end()
  })
  //adding middlewear  and redirect to error-router  
  endPointRoutes.all('/*', (_req: Request, res: Response) => {
    //  redirect error router if something is not true
      res.redirect('/error-404')
    })
    
export default endPointRoutes;