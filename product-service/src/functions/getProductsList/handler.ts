import type {ValidatedEventAPIGatewayProxyEvent} from '../../libs/api-gateway';
import {formatJSONResponse, errorServiceUnavailableResponse} from '../../libs/api-gateway';
import {middyfy} from '../../libs/lambda';
import productSchema from './schema';
import {Client} from 'pg';
import dbOptions from '@libs/db-options';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof productSchema> = async () => {
  const client = new Client(dbOptions);

  await client.connect();

  try {
    const data = await client.query('select * from products inner join stocks on id = product_id');

    return formatJSONResponse({products: `${JSON.stringify(data.rows)}`});
  } catch {
    return errorServiceUnavailableResponse();
  } finally {
    client.end();
  }
};

export const main = middyfy(getProductsList);
