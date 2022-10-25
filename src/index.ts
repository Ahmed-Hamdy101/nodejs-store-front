import  express,{Application,Request,Response } from "express";
import  morgan from "morgan";
import helmet from "helmet";
import  rateLimit from "express-rate-limit";
import  _Errors_  from "./Middleware/errorMiddleware";
import config from "./config/config";
import endPointRoutes from "./routes";
import body_parser from "body-parser";
import html from "./template/teamplate";
// CREATE BODY-PARSER
const urlencodedParser = body_parser.urlencoded({extended:false});

// import  env that include the port
const PORT = config.port|| 4000
// create an instance server
const app: Application = express()

// HTTP request logger middleware
app.use(morgan('short'))

// SECURITY middleware FOR MANY REQUEST 
app.use(rateLimit({
  windowMs:60*1000,
  max:4,
  standardHeaders:false,
  legacyHeaders:false
}))

// middleware parse 
app.use(express.json())

// HTTP Advance middleware
app.use(helmet());

app.use('/api',endPointRoutes);


// add routing for / path
app.get('/',urlencodedParser,(_req: Request, res: Response) => {
  res.send(`${html("/")}`)
})



// USE ERROR MIDDLEWARE 
app.use(_Errors_);

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`);
})

export default app;
