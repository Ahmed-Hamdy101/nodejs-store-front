import supertest from 'supertest'
import app from '../../index'

// create a request object
const request = supertest(app)

describe('Test orders endpoint responses', ()=>{
  

  
  // verify token
  it('Testin Get order endpoint should return status code 401 if no token  verified', async () => {
const response = await request.get(`/api/orders/cdf55917-fe85-4611-a8ed-c6422581f240`);
expect(response.status).toBe(401);
});

// verify  token 

it('Testing get order by id endpoint  valid token || GET ORDER by USERID endpoint should return status code 200 token verified',()=>{async () => {
        const response = await request.get('/api/orders/3d2b795b-287a-4354-9553-1375e1f12656');
        expect(response.status).toBe(200);
}})
   


it('Testing  Create order endpoint should return status code 401 ', async () => {
         const response = await request.post('/api/orders/createorder');
        expect(response.status).toBe(401);
});


it(' Testing Gget product order endpoints || UnAuthreturn status code 401 ', async () => {
        const response = await request.post(`/api/orders/3xxxxxxxxxxx/addproductorder`);
        expect(response.status).toBe(401);
});


it('Testing  Add products to order endpoint should return status code 401 if token verified', async () => {
      const response = await request.post(`/api/orders/3d2b795b-287a-4354-9553-1375e1f12656/addproductorder`);
      expect(response.status).toBe(401);
});

    
it(' Testing Get order products endpoint should return status code 401 if no token verified', async () => {
            const response = await request.get(`/api/orders/7946a14e-9c68-404c-9e62-4f0ead9fe1f8/Orderproduct`);
            expect(response.status).toBe(401);
  })
  


}
)

