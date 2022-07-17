import {handlerPath} from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        cors: true,
        description: 'Returns product found by ID (Model IProduct)',
        responseData: {
          200: {
            description: 'Array of products (Model - IProduct)',
          },
          500: {
            description: 'Service is unavailable',
          },
        },
      },
    },
  ],
};
