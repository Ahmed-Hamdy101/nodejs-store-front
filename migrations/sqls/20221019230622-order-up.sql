/* Replace with your SQL commands */
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- create  order table
-- CREATE ORDER TABLES
-- LAOD UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE orders(
id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
userid uuid 
 );
 
-- SET/ADDS relationship
 ALTER TABLE orders 
 ADD CONSTRAINT user_fk FOREIGN KEY(userid)
 REFERENCES user_tb(id) ;
 