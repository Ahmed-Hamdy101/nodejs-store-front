import  { Order_MODEL } from '../../model/orderProductModel'


describe('Testing-product-model', () => {
 
    const om = new Order_MODEL()

it('require getproduct All method to be define ', async () => {
    expect(om.getAllOrders).toBeDefined()
})
  
it('require productbyid method to be define ', async () => {
    expect(om.getOrdertByUserId).toBeDefined()
})

it('require create product method to be define ', async () => {
    expect(om.addOrderfunctionality).toBeDefined()
})
// ------------------------product-order----------------------------------------------------
it('require create product method to be define ', async () => {
    expect(om.CreateProductToOrder).toBeDefined()
})


it('require create product method to be define ', async () => {
    expect(om.getOrdertProductByOrderId).toBeDefined()
})


//  -- require token -- 
it('Testing create order to user ', async () => {

    const  userid:string="3d2b795b-287a-4354-9553-1375e1f12656";
      const od = await om.addOrderfunctionality({userid});
      expect(od.userid).toEqual("3d2b795b-287a-4354-9553-1375e1f12656");
    
    })
    
})