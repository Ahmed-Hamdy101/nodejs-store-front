// @ts-ignore
// import database connctions
import client from '../database/database';
// import orderProductTypes
import {MainOrder,ProductOrder } from '../types/orderProductTypes';

// class a blue print from Order_model 
export class Order_MODEL {
     /* ---------------------------{FOR ALL CRUD DB --comments }---------------------------------------
   *  create connection
   *  create Sequal Query string
   *  create query
   *  close the connections
   *  return result
   *  catch error if we have found
   *----------------------------------------------------------------------------- 
  */ 
  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{ create - orders }}++++++++++++++++++++++++++++++++++++++++++++++++++

  //Create order-functionility 
  async addOrderfunctionality(mod:MainOrder): Promise<MainOrder> {
    try {
      const conn = await client.connect();
       const sql = 'INSERT INTO orders(id,userid) VALUES(DEFAULT,$1) RETURNING *';
       // @ts-ignore
        const result = await conn.query(sql, [mod.userid]);
        conn.release();
        return result.rows[0];
    } catch (err) {
        throw new Error(`Could not get Productid: ${mod.userid}. Error: ${err}`)
    }
  }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{ index - get all orders }}++++++++++++++++++++++++++++++++++++++++++++++++++

  // get all orders
  async getAllOrders(): Promise<MainOrder[]> {
    try {
      // @ts-ignore
      const conn = await client.connect() ;
      const sql = 'SELECT * FROM orders';
      const result = await conn.query(sql);
      conn.release();
      return result.rows ;
    } catch (err) {
      throw new Error(`Could not get All Order. Error: ${err}`)
    }
  }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{ show - get order by user id }}++++++++++++++++++++++++++++++++++++++++++++++++++
  
//get order by user id
  async getOrdertByUserId(Userid:string): Promise<MainOrder> {
    try {
      const conn = await client.connect();
       const sql = 'SELECT id , userid  FROM orders WHERE userid = $1';
       // @ts-ignore
        const result = await conn.query(sql, [Userid]);
        conn.release();
        return result.rows[0];
    } catch (err) {
        throw new Error(`Could not get Productid: ${Userid}. Error: ${err}`)
    }
  }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{ Relationship Tables - getOrdertProductByOrderId &&  create -  Create Order_product}}++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{ show - get order by user id }}++++++++++++++++++++++++++++++++++++++++++++++++++
  
//get order by user id
  async getOrdertByOid(oid:string): Promise<MainOrder> {
    try {
      const conn = await client.connect();
       const sql = 'SELECT id , userid  FROM orders WHERE id = $1';
       // @ts-ignore
        const result = await conn.query(sql, [oid]);
        conn.release();
        return result.rows[0];
    } catch (err) {
        throw new Error(`Could not get Productid: ${oid}. Error: ${err}`)
    }
  }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{ Relationship Tables - getOrdertProductByOrderId &&  create -  Create Order_product}}++++++++++++++++++++++++++++++++++++++++++++++++++

  async getOrdertProductByOrderId(Orderid:string): Promise<ProductOrder[]> {
    try {
      const conn = await client.connect();
       const sql = `SELECT product.id,product.names , product.price, Orderproduct.quantity,orders.userid,user_tb.l_name,user_tb.f_name

       FROM product 
       INNER JOIN Orderproduct 
       on product.id = Orderproduct.product_reqid 
       INNER JOIN orders 
       on orders.id  = Orderproduct.order_reqid
       INNER JOIN user_tb
       ON user_tb.id = orders.userid
       WHERE Orderproduct.id=$1`;
       // @ts-ignore
        const result = await conn.query(sql, [Orderid]);
        conn.release();
        return result.rows;
    } catch (err) {
        throw new Error(`Could not get Productid: ${Orderid}. Error: ${err}`)
    }
  }


  async CreateProductToOrder(orderid:string,pto:ProductOrder): Promise<ProductOrder> {
    
    try {
        const sql = 'INSERT INTO Orderproduct(order_reqid,product_reqid,quantity) VALUES($1,$2,$3)  RETURNING  *';
        // @ts-ignore
        const conn = await client.connect();
        const result = await conn.query(sql, [orderid,pto.product_reqid,pto.quantity]);     
        const ordertp = result.rows[0];
        conn.release();
        return ordertp ;
    } catch (err) {
        throw new Error(`Could not add order orderID, productID,Quantity . Error: ${err}`)
    }
  }
//  -----------------------------------------------------------------------------------------------------------


}
