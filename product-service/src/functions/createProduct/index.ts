import {handlerPath} from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'products',
        cors: true,
        responseData: {
          200: {
            description: 'Product is created in DB',
          },
          400: {
            description: 'Product creation failed',
          },
          500: {
            description: 'Service is unavailable',
          },
        },
      },
    },
  ],
};
