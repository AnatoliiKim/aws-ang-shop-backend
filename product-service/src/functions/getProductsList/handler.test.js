const handler = require('./handler');
 
test('correct product found by ID', async () => {
  const response = await handler.main();

  expect(JSON.parse(response.body).products).toBe(JSON.stringify([
    {
      "type": "spicy",
      "count": 3,
      "description": "Really hot and spicy ramen",
      "id": "1",
      "price": 100,
      "title": "Samyang"
    },
    {
      "type": "medium",
      "count": 3,
      "description": "Balanced taste",
      "id": "2",
      "price": 80,
      "title": "Jhin"
    },
    {
      "type": "soft",
      "count": 7,
      "description": "Soft taste",
      "id": "3",
      "price": 50,
      "title": "Yongshim"
    },
    {
      "type": "medium",
      "count": 10,
      "description": "Cheese taste",
      "id": "4",
      "price": 60,
      "title": "Samyang"
    },
    {
      "type": "spicy",
      "count": 3,
      "description": "Extra spicy taste",
      "id": "5",
      "price": 120,
      "title": "Nongshim"
    }
  ]));
});