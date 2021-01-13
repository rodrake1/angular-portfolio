import { SubMenu } from "../models";

export interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  discount?: number;
  options?: SubMenu[];
}
