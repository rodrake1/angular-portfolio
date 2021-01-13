import { Product } from './product';

export type SubMenu = {
  name: string;
  products: { [product: string]: Product };
  required?: boolean;
  quantity?: number;
};
