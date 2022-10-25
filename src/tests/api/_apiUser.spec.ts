import supertest from 'supertest'
import app from '../../index'
// create a request object
const request = supertest(app)

describe('Testing endpoints users', () => {

// Route is wrong !

it(' Testing Second Routes endpoints Error missing addational routes return 404  !', async () => {

    const response = await request.get('/xx/users/');
    expect(response.status).toBe(404);  
})
  

//  --- require  Toekn if the user it does exist ----

it(' testing invlid user id or un Auth should return 401  !', async () => {
    const response = await request.get('/api/user/XXX')
    expect(response.status).toBe(401)
})
  
//  --- require  Toekn if the user it does exist ----
  
it('get all users  Return || Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication ', async () => {
    const response = await request.get('/api/user/')
    expect(response.status).toBe(401)
})


//   invalid token please add valid id which is the token generate in Auth 
it('Testing get one user Return || Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication ', async () => {
    const response = await request.get('/api/user/cdf55917-fe85-4611-a8ed-c6422581f240')
    expect(response.status).toBe(401)
})


it('Testing unauthorized response ', async () => {
    const response = await request.get('/api/user/')
    expect(response.status).toBe(401)
})


it('Testing login User inputs empty ', async () => {
    const response = await request.post('/api/user/signin').send();
    expect(response.status).toBe(401)
})


//  ---  require Toekn || if the user is Auth it would retuen 200  ----
it(' Testing Create oneUser Return 401 the user is not Auth ', async () => {
    const response = await request.post('/api/user/register').send({
        "f_name":"light",
        "l_name": "stand",
        "passwords":"secure-militry@fbi.us"
       });
    expect(response.status).toBe(401)
  })


//  --- require  Toekn ----

it('Testing register endpoints return 401   ', async () => {
    const response = await request.post('/api/user/register')
    expect(response.status).toBe(401)
  })


//  --- create  Toekn if the user it does exist ----
it('Testing sign in endpoints  Name/password /Login Wrong ! endpoints', async () => {
    
     const response = await request.post('/api/user/signin').send({
        "f_name":"night",
        "l_name": "xxx",
        "passwords":"Error_password"
        }
     );
     expect(response.status).toBe(401)
})

it('Testing Auth/login user Return 200 because the use is Auth|| token with  valid authentication ', async () => {
    const response = await request.post('/api/user/signin').send({
        "f_name":"alan",
        "l_name": "turning",
        "passwords":"_01sec"
       }
        );
    expect(response.status).toBe(200);
})

})
