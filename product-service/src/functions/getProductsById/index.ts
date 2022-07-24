import {handlerPath} from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products/{id}',
        cors: true,
        responseData: {
          200: {
            description: 'Returns product found by ID (Model IProduct)',
          },
          404: {
            description: 'Product not found',
          },
          500: {
            description: 'Service is unavailable',
          },
        },
      },
    },
  ],
};
