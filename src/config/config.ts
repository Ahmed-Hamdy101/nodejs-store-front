// IMPORT DOT ENV
import dotenv from "dotenv";
// LOAD DOT ENV VARIABLES
dotenv.config();

// IMPOR ENV VARIABLES TO SECURE THE INFORMARIONS
const {PORT,
    PG_HOST,
    PG_USER,
    PG_DB,
    PG_DB_TEST,
    PG_PASSWORD,
    PG_PORT,
    ENV,
    PG_BCRYPY_SC,
    PG_SALT_ROUND,
    PG_MYTOKEN
} = process.env;

export default {
host:PG_HOST,
user:PG_USER,
db_user:ENV == 'dev' ? PG_DB:PG_DB_TEST,
password:PG_PASSWORD,
db_port:PG_PORT ,
port:PORT ,
peppar:PG_BCRYPY_SC,
salt:PG_SALT_ROUND,
secureToken:PG_MYTOKEN
};