	
const handler = require('./handler');
 
test('correct product found by ID', async () => {
  const response =  await handler.main({
    pathParameters: {
      id: '1'
    }
  });

  expect(JSON.parse(response.body).id).toBe('1');
});