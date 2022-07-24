import type {ValidatedEventAPIGatewayProxyEvent} from '../../libs/api-gateway';
import {formatJSONResponse, errorNotFoundResponse, errorServiceUnavailableResponse} from '../../libs/api-gateway';
import {middyfy} from '../../libs/lambda';
import productSchema from './schema';
import {Client} from 'pg';
import dbOptions from '@libs/db-options';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof productSchema> = async (event) => {
  const client = new Client(dbOptions);
  let product;

  console.log(event);

  await client.connect();

  try {
    const data = await client.query('select * from products inner join stocks on id = product_id');

    product = data.rows.find((product) => product.id === event.pathParameters?.id);
  } catch {
    return errorServiceUnavailableResponse();
  } finally {
    client.end();
  }

  return product ? formatJSONResponse(product) : errorNotFoundResponse();
};

export const main = middyfy(getProductsById);
