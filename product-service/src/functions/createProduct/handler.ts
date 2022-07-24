import {errorInvalidDataResponse, ValidatedEventAPIGatewayProxyEvent} from '../../libs/api-gateway';
import {errorServiceUnavailableResponse} from '../../libs/api-gateway';
import {middyfy} from '../../libs/lambda';
import {Client} from 'pg';
import dbOptions from '@libs/db-options';
import {validateProductDataForAdd} from '@libs/validators';
import {IProduct} from 'src/interfaces/product.interface';

const createProduct: ValidatedEventAPIGatewayProxyEvent<void> = async (event) => {
  console.log(event);

  if (!validateProductDataForAdd(event.body as IProduct)) {
    return errorInvalidDataResponse();
  }

  const client = new Client(dbOptions);
  const {title, description, price} = event.body as IProduct;

  await client.connect();

  try {
    await client.query(`
      INSERT INTO products (title, description, price) 
      VALUES (${title}, ${description}, ${price})
    `);
  } catch {
    return errorServiceUnavailableResponse();
  } finally {
    client.end();
  }
};

export const main = middyfy(createProduct);
