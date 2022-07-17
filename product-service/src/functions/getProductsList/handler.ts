import type {ValidatedEventAPIGatewayProxyEvent} from '../../libs/api-gateway';
import {formatJSONResponse, errorServiceUnavailableResponse} from '../../libs/api-gateway';
import {middyfy} from '../../libs/lambda';
import mockResponse from '../mock.json';

import productSchema from './schema';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof productSchema> = async () => {
  try {
    const products = await Promise.resolve(mockResponse.body);

    return formatJSONResponse({products: `${JSON.stringify(products)}`});
  } catch {
    return errorServiceUnavailableResponse();
  }
};

export const main = middyfy(getProductsList);
