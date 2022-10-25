/* Replace with your SQL commands */
-- LOAD UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- CREATA ORDER PRODUCT TABLE
CREATE TABLE Orderproduct(
 id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,   
 order_reqid uuid  ,
 product_reqid uuid  ,
 quantity INTEGER DEFAULT 1
 );
 
--  ALTER TABLES TO ADD RELATIONSHIP
  ALTER TABLE Orderproduct 
 ADD CONSTRAINT order_fk FOREIGN KEY(order_reqid)
 REFERENCES orders(id) ;
-- ALTER TABLE TO ADD RELATION SHIP
 ALTER TABLE Orderproduct 
 ADD CONSTRAINT orderproduct_fk FOREIGN KEY(product_reqid)
 REFERENCES product(id) ;
