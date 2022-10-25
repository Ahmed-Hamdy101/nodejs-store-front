/* Replace with your SQL commands */
 /* Replace with your SQL commands */
--   LOAD EXTENSION UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CREATE PRODUCT TABLE
CREATE TABLE product(
id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
 names VARCHAR(100),
 price INTEGER,
 quantity INTEGER
 );
 
 
 