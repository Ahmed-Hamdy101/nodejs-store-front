// IMPORT PG 'POSTGRES' DERIVER
import {Pool} from "pg"
// IMPORT CONFIG FILE
import config from "../config/config"

//SET NEW CONNECTION TO THE DATABASE 
const client= new Pool({
host:config.host,
database:config.db_user,
user:config.user,
password:config.password,
port:parseInt( config.db_port as string,10),
max:4
});
 
// GET ERROR IF SOMETHING HAPPEN
client.on('error',(error:Error)=>{

console.log(error.message);


})

export default client;