// @ts-ignore
import client from '../database/database'
import Product from '../types/productTypes';


export class PRODUCT_MODEL {
      /* ---------------------------{FOR ALL CRUD DB --comments }---------------------------------------
   *  create connection
   *  create Sequal Query string
   *  create query
   *  close the connections
   *  return result
   *  catch error if we have found
   *----------------------------------------------------------------------------- 
  */ 
  
//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{INDEX ALL PRODUCT}}++++++++++++++++++++++++++++++++++++++++++++++++++
  
//INDEX ALL PRODUCT
  async getAllProduct(): Promise<Product[]> {
    try {
      // @ts-ignore
      const conn = await client.connect() ;
      const sql = 'SELECT * FROM product';
      const result = await conn.query(sql);
      conn.release();
      return result.rows ;
    } catch (err) {
      throw new Error(`Could not get AllProduct From Product. Error: ${err}`)
    }
  }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{  SHOW-- One Set Result By id}}++++++++++++++++++++++++++++++++++++++++++++++++++

  // One Set Result
  async getProductByUserId(id:string): Promise<Product> {
    try {
      const conn = await client.connect();
       const sql = 'SELECT * FROM product WHERE id =($1)';
       // @ts-ignore
        const result = await conn.query(sql, [id]);
        conn.release();
        return result.rows[0];
    } catch (err) {
        throw new Error(`Could not get Productid: ${id}. Error: ${err}`)
    }
  }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++{{ CREATE -- ADD RECORD}}++++++++++++++++++++++++++++++++++++++++++++++++++

  //ADD RECORD
  async CreateProduct(p: Product): Promise<Product> {
    
    try {
        const sql = 'INSERT INTO product(names,price,quantity) VALUES($1,$2,$3)  RETURNING *';
        // @ts-ignore
        const conn = await client.connect();
        const result = await conn.query(sql, [p.names,p.price,p.quantity]);     
        const test = result.rows[0];
        conn.release();
        return test ;
    } catch (err) {
        throw new Error(`Could not add record ${p.names,p.price,p.quantity} . Error: ${err}`)
    }
  }
 

}

// export for import Files 
export default PRODUCT_MODEL;