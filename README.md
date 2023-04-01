<img src="./src/template/uda4.png" />
<div id="header" align="center">

  <div id="badges">
   <a href="https://jasmine.com"><img src="https://img.shields.io/badge/jasmine-purple?style=for-the-badge&logo=jasmine&logoColor=white" alt="LinkedIn Badge"/> </a>
      <a href="https://www.nodejs.com/channel/UCWiPRMWHBpr4jvjCzAeW5dw"> <img src="https://img.shields.io/badge/Nodejs-green?style=for-the-badge&logo=javascript&logoColor=white" alt="Node Js Badge"/> </a>
  <a href="https://www.typescript.com/"><img src="https://img.shields.io/badge/Typescript-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TS Badge"/> </a> <a href="https://twitter.com/"><img src="https://img.shields.io/badge/npm-orange?style=for-the-badge&logo=npm&logoColor=white" alt="npm Badge"/> </a>
        <a href="https://www.npm.com/"><img src="https://img.shields.io/badge/bootstrap-purple?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Twitter Badge"/> </a><a href="https://twitter.com/"><img src="https://img.shields.io/badge/express-yellow?style=for-the-badge&logo=express&logoColor=white" alt="ex Badge"/> </a><a href="https://www.bootstrap.com"><img src="https://img.shields.io/badge/yarn-white?style=for-the-badge&logo=yarn&logoColor=blue" alt="bootstrap Badge"/> </a>   <a href="https://prettier.com/"><img src="https://img.shields.io/badge/prettier-black?style=for-the-badge&logo=prettier&logoColor=red" alt="prettier Badge"/> </a><a href="https://eslint.com/"><img src="https://img.shields.io/badge/eslint-purple?style=for-the-badge&logo=eslint&logoColorwhite" alt="eslint Badge"/> </a><a href="https://https://jwt.io/"><img src="https://img.shields.io/badge/JWT-green?style=for-the-badge&logo=JSON&logoColorwhite" alt="Twitter Badge"/> </a>
  
  
</div>
</div>
<h3>  Welcome in udacity Store Front </h3>

* <p>  this is  udacity app  store front created  processing CRUD on that partical system </p>

## Contents:

* I  <a  href="#id1">step by step   Connect to database and create Env Files</a>
* II   <a  href="#id2">package  && installation instructions</a>
* III <a  href="#id3"> Run the Server</a>
* IIII  <a  href="#id4">My Shell</a>
* V  <a  href="#id5">All API</a>
* VI  <a  href="#id6">Database</a>
* VII <a  href="#id7">Testing </a>

##### Windows commands
>   yarn s-install     #require yarn 

or if u have a bash shell 

>  bash [Win-install.sh](./win-install.sh)

##### Install database and run the server
>   yarn d-install

or

>  bash [create-database.sh](./create-database.sh)

<br>

or you can go to **Step by step** 
<h1><a id="id1" href="#"> Step by step   Connect to database and create Env Files</a> </h1>

for how to setup  env file go to check from here <a  href="https://htmlpreview.github.io/?https://github.com/Turria101/Store-Front/blob/master/src/docs/Create-env.html" > connect to database and create env</a>

<h1><a id="id2"> Package installation instructions</a> </h1>

for how to setup packages check from here <a  href="https://htmlpreview.github.io/?https://github.com/Turria101/Store-Front/blob/master/src/docs/packages.html" > install packages</a>
<h2> <a id="id3">Run The   server</a> </h2>
run this command
```npm
npm run start
```
* yarn
> yarn start

* install my script 
>  yarn s-install 

* Port
```bash
Server port : 4000
Database port : 5432
Server : localhost
```
<h1> <a id="id4">Win-Shell</a> </h1>:
Working on Windows i haven't tested on liux machine  yet 
I have Creted a Shell inside the repo 
you can check From my document here [ shell](https://htmlpreview.github.io/?https://github.com/Turria101/Store-Front/blob/master/src/docs/shell.html) 

<h1> <a id="id5" >All API</a> </h1> 
<p> for more information <a src="./REQUIREMENTS.md" >Requirment</a> </p>

<table>
    <th>
        <tr>
            <td>URL</td>
            <td>Type</td>
            <td>Token </td>
        </tr>
    </th>
    <tbody>
        <tr>
            <td>/api/products/findAll</td>
            <td>GET</td>
            <td> valid</td>
        </tr>
        <tr>
            <td>/api/products/:id</td>
            <td>GET</td>
            <td>valid</td>
        </tr>
        <tr>
            <td>/api/products/create</td>
            <td>CREATE</td>
            <td>invalid require token</td>
        </tr>
        </tr>
        <tr>
            <td>/api/products/create</td>
            <td>CREATE</td>
            <td>valid token</td>
        </tr>
        <tr>
            <td>/api/users/all</td>
            <td>GET</td>
            <td> invalid  </td>
        </tr>
        <tr>
            <td>/api/users/:id</td>
            <td>GET</td>
            <td>invalid</td>
        </tr>
        <tr>
            <td>/api/users/register</td>
            <td>POST</td>
            <td>invalid</td>
        </tr>
        <tr>
            <td>/api/users/:id/edit</td>
            <td>UPDATE</td>
            <td>valid</td>
        </tr>
        <tr>
            <td>/api/users/:id/delete</td>
            <td>DELETE</td>
            <td>valid</td>
        </tr>
        <tr>
            <td>/api/users/:id/signin</td>
            <td>POST</td>
            <td>invalid</td>
        </tr>
        <tr>
            <td>/api/orders/:Userid</td>
            <td>GET</td>
            <td>valid</td>
        </tr>
        <tr>
            <td>/api/orders/:oid</td>
            <td>GET</td>
            <td>valid</td>
        </tr>
        <tr>
            <td>/api/orders/createorder</td>
            <td>POST</td>
            <td>valid</td>
        </tr>
        <tr>
            <td>/api/orders/:oid/addproductorder</td>
            <td>POST</td>
            <td>valid</td>
        </tr>
        <tr>
            <td>/api/orders/:pid/Orderproduct</td>
            <td>GET</td>
            <td>valid</td>
        </tr>
    <tbody>
</table>



<h3>  <a id="id6"> DATABASE </a> </h3> 
check from <a href="./REQUIREMENTS.md" >Requirement</a>

 <h4><a id="id7"> Testing </a> </h4> 
 
<code> npm run test </code>

<code>
 shell
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
Done in 7.72s.```
</code>






    

  


  

  
  
  
  
