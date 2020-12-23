import { SubMenu, SubMenuNames } from 'src/assets/menu/menu';

export interface Product {
  name: string;
  description: string;
  image: string;
  price: number;
  discount?: number;
}

export interface ProductCombo extends Product {
  options?: ProductOptions[];
}

export type ProductOptions = {
  [subMenu in SubMenuNames]?: SubMenu;
} & {
  required: boolean;
  quantity: number;
};
