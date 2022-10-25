import supertest from 'supertest'
import app from '../../index'
// create a request object
const request = supertest(app)

describe('Testing endpoints products', () => {


    //  ---  require Toekn ---- create require {AuthmiddlewareToken} only creatation require token
  it(' Testing  Create product endpoint should return status code 401', async () => {
    const response = await request.post(`/api/products/create`).send({names:"test" , price:2});
    expect(response.status).toBe(401);
  
   })


    // ALL
 it(' Testing Get all products endpoint should return status code 404', async () => {
    const response = await request.get("localhost:4000/api/products/findAll");
    expect(response.status).toBe(404);
  });


  // One --- Not require Toekn ----
  it(' Testing Get product endpoint should return status code 200', async () => {
    const response = await request.get(`/api/products/4e08ef4f-d468-487d-bce6-6cac3c5c8554`);
    expect(response.status).toBe(200);
  });



//   it('gets all products  api endpoint', async () => {
//     const res = await request
//       .get('api/products/findAll')
//       .set(validtoken);

//     expect(res.status).toBe(200);
//     expect(res.body).toEqual(
//       {
//         id: "4e08ef4f-d468-487d-bce6-6cac3c5c8554",
//         names: "nokia",
//         price: 500,
//         quantity: 2
//     });
// })

// it('gets specific products  api endpoint', async () => {
//     const res = await request
//       .get('api/products/623ac3c6-95d0-4c2a-b24a-532bb014a571')
//       .set(validtoken);

//     expect(res.status).toBe(200);
//     expect(res.body).toEqual(
//       {
//         id: "4e08ef4f-d468-487d-bce6-6cac3c5c8554",
//         names: "nokia",
//         price: 500,
//         quantity: 2
//     });
// })


// it('create products  api endpoint', async () => {
//     const res = await request
//       .get('/api/products/create')
//       .set(validtoken);

//     expect(res.status).toBe(200);
//     expect(res.body).toEqual(
//       {
//         id: "e5c791f3-0aa1-4d58-bc25-404df468dc80",
//         names: "IPhone 9+",
//         price: 20000,
// //         quantity: 4
// //     });
// })


})