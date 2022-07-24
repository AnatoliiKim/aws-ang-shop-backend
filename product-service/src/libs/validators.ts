import {IProduct} from 'src/interfaces/product.interface';

export const validateProductDataForAdd = (data: IProduct): boolean => {
  return isFinite(data.price) && !!data.title && !!data.description;
};
