import type { ValidatedEventAPIGatewayProxyEvent } from '../../libs/api-gateway';
import { formatJSONResponse, errorNotFoundResponse, errorServiceUnavailableResponse } from '../../libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import mockData from '../mock.json';
import productSchema from './schema';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<typeof productSchema> = async (event) => {
  let product;

  try {
    const products = await Promise.resolve(mockData.body);

    product = products.find((product) => product.id === event.pathParameters?.id);
  } catch {
    return errorServiceUnavailableResponse();
  }

  return product ? formatJSONResponse(product) : errorNotFoundResponse();
};

export const main = middyfy(getProductsById);
