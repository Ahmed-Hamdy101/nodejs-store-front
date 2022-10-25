import supertest from 'supertest'
import app from '../index'
// create a request object
const request = supertest(app)

describe('Testing endpoints response', () => {
  it('test INDEX / endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
  
})
