import  { PRODUCT_MODEL } from '../../model/ProductModel'


describe('Testing-product-model', () => {
 
    const pm = new PRODUCT_MODEL()

it('require getproduct All method to be define ', async () => {
    expect(pm.getAllProduct).toBeDefined()
})
  
it('require productbyid method to be define ', async () => {
    expect(pm.getProductByUserId).toBeDefined()
})

it('require create product method to be define ', async () => {
    expect(pm.CreateProduct).toBeDefined()
})



it('create product ', async () => {
    // return create product
    const  names:string="S6" , price:number=2500,quantity=1;
    const p = await pm.CreateProduct({names,price,quantity});
    expect(p.names).toEqual("S6");
    expect(p.price).toEqual(2500);
    expect(p.quantity).toEqual(1);

})
    
    
it('get product by id to give me all records for that specfic product ', async () => {
       // return specific user by id 
        const p = await pm.getProductByUserId("ebbdb68a-05ba-4518-aebe-c9d5ef62188c");
        expect(p.names).toEqual("S6");
        expect(p.price).toEqual(2500);
        expect(p.quantity).toEqual(1);


})


it(' get ll products to give me all records ', async () => {
 
    const p = await pm.getAllProduct();
      //return all in array
      // return the index of 0 for the array
          expect(p[0].id).toEqual("4e08ef4f-d468-487d-bce6-6cac3c5c8554");
          expect(p[0].names).toEqual("nokia");
          expect(p[0].price).toEqual(500);
          expect(p[0].quantity).toEqual(2);
})

})