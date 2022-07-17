export default {
  type: 'object',
  properties: {
    type: {type: 'string'},
    count: {type: 'number'},
    description: {type: 'string'},
    id: {type: 'string'},
    price: {type: 'number'},
    title: {type: 'string'},
  },
  required: ['id', 'count', 'price', 'title'],
} as const;
