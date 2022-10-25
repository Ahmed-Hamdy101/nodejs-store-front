import  { USER_MODEL } from '../../model/UserModel'

/**
 *  2 Testing-user-model
 * √ require get All method to be define 
 * √ require userbyid method to be define 
 * √ require userbyid method to be define 
 * √ require updateUser method to be define 
 * √ require DeleteUser method to be define 
 * √  Testing Controllers create user 
 * √ Testing Controllers get user by id to give me all records for that specfic user 
 * √ Testing Controllers get all to give me all records 
 * -- no testing for delete method   
*/
describe('Testing-user-model', () => {
 
const um = new USER_MODEL()

it('require get All method to be define ', async () => {
    expect(um.getAll).toBeDefined()
})
  
it('require userbyid method to be define ', async () => {
    expect(um.getUserById).toBeDefined()
})

it('require userbyid method to be define ', async () => {
    expect(um.CreateUser).toBeDefined()
})


it('require updateUser method to be define ', async () => {
    expect(um.UpdateUser).toBeDefined()
})
  

it('require DeleteUser method to be define ', async () => {
    expect(um.DeleteUser).toBeDefined()
})





it(' Testing Controllers create user ', async () => {
   // return create user
    const  f_name:string="karl" , l_name:string="alex",passwords:string = "_01123" ;
    const user = await um.CreateUser({f_name,l_name,passwords});
    expect(user.f_name).toEqual("karl");
    expect(user.l_name).toEqual("alex");
    expect(user.passwords).not.toEqual("password");

})


it('Testing Controllers get user by id to give me all records for that specfic user ', async () => {
// return specific user by id 
    const user = await um.getUserById("3d2b795b-287a-4354-9553-1375e1f12656");
    expect(user.f_name).toEqual("night");
    expect(user.l_name).toEqual("stand");
    // if the the password does not match
    expect(user.passwords).not.toEqual("password");
})


it('Testing Controllers get all to give me all records ', async () => {

      const us = await um.getAll();
      expect(us[0].id).toEqual("3d2b795b-287a-4354-9553-1375e1f12656");
      expect(us[0].f_name).toEqual("night");
      expect(us[0].l_name).toEqual("stand");
      expect(us[0].passwords).not.toEqual("p_assword_");


})

})


/**C:\Users\Black-Gate\Documents\2nd_Project\project_2>yarn test
yarn run v1.22.19
warning package.json: "test" is also the name of a node core module
$ npx tsc && jasmine
Jasmine started
Server is starting at port:4000
::ffff:127.0.0.1 - GET / HTTP/1.1 200 2392 - 5.839 ms

  1 Testing endpoints response
    √ test hello world endpoint

  2 Testing-user-model
    √ require get All method to be define 
    √ require userbyid method to be define 
    √ require userbyid method to be define 
    √ require updateUser method to be define 
    √ require DeleteUser method to be define 
    √  Testing Controllers create user 
    √ Testing Controllers get user by id to give me all records for that specfic user 
    √ Testing Controllers get all to give me all records 

Executed 9 of 9 specs SUCCESS in 0.296 sec.
Done in 7.73s.

C:\Users\Black-Gate\Documents\2nd_Project\project_2>yarn test
yarn run v1.22.19
warning package.json: "test" is also the name of a node core module
$ npx tsc && jasmine
Jasmine started
Server is starting at port:4000
::ffff:127.0.0.1 - GET /api/orders/cdf55917-fe85-4611-a8ed-c6422581f240 HTTP/1.1 401 53 - 8.860 ms

  1 Test orders endpoint responses
    √ Testin Get order endpoint should return status code 401 if no token  verified
    √ Testing get order by id endpoint  valid token || GET ORDER by USERID endpoint should return status code 200 token verified
::ffff:127.0.0.1 - POST /api/orders/createorder HTTP/1.1 401 53 - 4.482 ms
    √ Testing  Create order endpoint should return status code 401 
::ffff:127.0.0.1 - POST /api/orders/3xxxxxxxxxxx/addproductorder HTTP/1.1 401 53 - 2.435 ms
    √  Testing Gget product order endpoints || UnAuthreturn status code 401 
::ffff:127.0.0.1 - POST /api/orders/3d2b795b-287a-4354-9553-1375e1f12656/addproductorder HTTP/1.1 401 53 - 0.818 ms
    √ Testing  Add products to order endpoint should return status code 401 if token verified
::ffff:127.0.0.1 - GET /api/orders/7946a14e-9c68-404c-9e62-4f0ead9fe1f8/Orderproduct HTTP/1.1 401 53 - 0.549 ms
    √  Testing Get order products endpoint should return status code 401 if no token verified

::ffff:127.0.0.1 - POST /api/products/create HTTP/1.1 401 53 - 22.598 ms
  2 Testing endpoints products
    √  Testing  Create product endpoint should return status code 401
::ffff:127.0.0.1 - GET /:63999localhost/api/products/findAll HTTP/1.1 404 175 - 6.605 ms
    √  Testing Get all products endpoint should return status code 404
::ffff:127.0.0.1 - GET /api/products/4e08ef4f-d468-487d-bce6-6cac3c5c8554 HTTP/1.1 200 178 - 99.063 ms
    √  Testing Get product endpoint should return status code 200

::ffff:127.0.0.1 - GET /xx/users/ HTTP/1.1 404 148 - 2.042 ms
  3 Testing endpoints users
    √  Testing Second Routes endpoints Error missing addational routes return 404  !
::ffff:127.0.0.1 - GET /api/user/XXX HTTP/1.1 401 53 - 2.308 ms
    √  testing invlid user id or un Auth should return 401  !
::ffff:127.0.0.1 - GET /api/user/ HTTP/1.1 401 53 - 1.791 ms
    √ get all users  Return || Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication
::ffff:127.0.0.1 - GET /api/user/cdf55917-fe85-4611-a8ed-c6422581f240 HTTP/1.1 401 53 - 4.017 ms
    √ Testing get one user Return || Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication
::ffff:127.0.0.1 - GET /api/user/ HTTP/1.1 401 53 - 0.855 ms
    √ Testing unauthorized response 
::ffff:127.0.0.1 - POST /api/user/signin HTTP/1.1 401 45 - 13.549 ms
    √ Testing login User inputs empty 
::ffff:127.0.0.1 - POST /api/user/register HTTP/1.1 401 53 - 2.249 ms
    √  Testing Create oneUser Return 401 the user is not Auth 
::ffff:127.0.0.1 - POST /api/user/register HTTP/1.1 401 53 - 0.845 ms
    √ Testing register endpoints return 401   
::ffff:127.0.0.1 - POST /api/user/signin HTTP/1.1 401 45 - 4.699 ms
    √ Testing sign in endpoints  Name/password /Login Wrong ! endpoints
::ffff:127.0.0.1 - POST /api/user/signin HTTP/1.1 200 377 - 125.967 ms
    √ Testing Auth/login user Return 200 because the use is Auth|| token with  valid authentication 

::ffff:127.0.0.1 - GET / HTTP/1.1 200 2392 - 5.582 ms
  4 Testing endpoints response
    √ test hello world endpoint

  5 Testing-product-model
    √ require getproduct All method to be define 
    √ require productbyid method to be define 
    √ require create product method to be define 
    √ require create product method to be define 
    √ require create product method to be define 
    √ Testing create order to user 

  6 Testing-product-model
    √ require getproduct All method to be define 
    √ require productbyid method to be define 
    √ require create product method to be define 
    √ create product 
    √ get product by id to give me all records for that specfic product 
    √  get ll products to give me all records 

  7 Testing-user-model
    √ require get All method to be define 
    √ require userbyid method to be define 
    √ require userbyid method to be define 
    √ require updateUser method to be define 
    √ require DeleteUser method to be define 
    √  Testing Controllers create user 
    √ Testing Controllers get user by id to give me all records for that specfic user 
    √ Testing Controllers get all to give me all records 

Executed 40 of 40 specs SUCCESS in 0.911 sec.
Done in 7.72s.
 * 
 */