// @ts-ignore
import bcrypt from "bcrypt";
import client from '../database/database'
import User from '../types/userTypes';
import config from "../config/config";


const hash_passwd=(pass:string)=>{
const salt= parseInt( config.salt as string ,10);
return  bcrypt.hashSync(`${pass}${config.peppar}`,salt)
}

export class USER_MODEL {
  
  /* ---------------------------{DB}---------------------------------------
   *  create connection
   *  create Sequal Query string
   *  create query
   *  close the connections
   *----------------------------------------------------------------------------- 
  */ 
   // get All Users
  async getAll(): Promise<User[]> {
    try {
      // @ts-ignore
      const conn = await client.connect() ;
      const sql = 'SELECT * FROM user_tb';
      const result = await conn.query(sql);
      conn.release();
      return result.rows ;
    } catch (err) {
      throw new Error(`Could not get store table. Error: ${err}`)
    }
  }

     // get Oneset Users
  async getUserById(id: string): Promise<User> {
    try {
      const conn = await client.connect();
       const sql = 'SELECT f_name,l_name FROM user_tb WHERE id =($1)';
       // @ts-ignore
        const result = await conn.query(sql, [id]);
        conn.release();
        return result.rows[0];
    } catch (err) {
        throw new Error(`Could not get id ${id}. Error: ${err}`)
    }
  }

     // Create Users
  async CreateUser(usr: User): Promise<User> {
  

    try {
        const conn = await client.connect();
        const sql = 'INSERT INTO user_tb(f_name,l_name,passwords) VALUES($1,$2,$3)  RETURNING id ,f_name,l_name';
        const result = await conn.query(sql, [usr.f_name,usr.l_name,hash_passwd( usr.passwords)]);     
        const test = result.rows[0];
        conn.release();
        return test ;
    } catch (err) {
        throw new Error(`Could not add record ${usr.f_name} . Error: ${err}`)
    }
  }

   // update Users
   async UpdateUser(id:string,u_upd:User): Promise<User> {
    // @ts-ignore
    try {
      // create connection
      const conn = await client.connect();
         // create Sequal Query string
       const sql = 'UPDATE user_tb SET f_name=$1,l_name=$2,passwords=$3 WHERE id=$4  RETURNING id ,f_name,l_name';
        //  create query
       const result = await conn.query(sql, [u_upd.f_name,u_upd.l_name,hash_passwd(u_upd.passwords),id]);
  
       conn.release();
        return result.rows[0];
    } catch (err) {
        throw new Error(`Could not update record [ ${u_upd.f_name,u_upd.l_name,u_upd.passwords,u_upd.id}] \n Error: ${err}`)
    }
  }

   // Delete Users
  async DeleteUser(id: string): Promise<User> {
    try {
      const conn = await client.connect();
       const sql = 'DELETE FROM user_tb WHERE id =($1)';
       // @ts-ignore
        const result = await conn.query(sql, [id]);
        conn.release();
        return result.rows[0];
    } catch (err) {
        throw new Error(`Could not delete id ${id} \n Error: ${err}`);
    }
  }



  async Auth(f_name:string,l_name:string,passwords:string): Promise<User|null> {
    try {
      const conn = await client.connect();
       const sql = 'SELECT passwords FROM user_tb WHERE f_name=$1 AND l_name=($2)';
       // @ts-ignore
        const result = await conn.query(sql, [f_name,l_name]);
        
       if (result.rows.length) {
        const {passwords:hash_passwd} = result.rows[0];
        const isPass = bcrypt.compareSync(`${passwords}${config.peppar}`,hash_passwd); 
        if (isPass) {
          const userDetail = await conn.query('SELECT id ,f_name ,l_name FROM user_tb WHERE f_name=($1) AND l_name=($2)',[f_name,l_name]);
          return userDetail.rows[0];
        }
      } 
      conn.release();
      return null;
      } catch (err) {
        throw new Error(`Unable to Auth !${err} `);
    }
  }


}


export default USER_MODEL;