/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--   LOAD EXTENSION UUID
-- CREATE TABLE
CREATE TABLE user_tb
(id uuid DEFAULT uuid_generate_v4() PRIMARY KEY ,
 f_name VARCHAR(100),
 l_name VARCHAR(50),
 passwords VARCHAR(100)
 );
 
