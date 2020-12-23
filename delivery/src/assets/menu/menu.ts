import { Product } from '../../app/models/product';
import { meals } from './meals';
import { sandwiches } from './sandwiches';
import { sides } from './sides';
import { beverages } from './beverages';
import { desserts } from './desserts';

export const menu: Menu = {
  meals,
  sandwiches,
  sides,
  beverages,
  desserts,
};
export type Menu = {
  [subMenu in SubMenuNames]?: SubMenu;
}

export type SubMenu = {
  [product in ProductNames]?: Product;
}

export type SubMenuNames =
  | 'meals'
  | 'sandwiches'
  | 'sides'
  | 'beverages'
  | 'desserts';

  export type ProductNames = 
  | 'bigMacMeal'
  | 'cheeseburgerMeal'
  | 'quarterPounderMeal'
  | 'bigMac'
  | 'cheeseburger'
  | 'quarterPounder'
  | 'frenchFries'
  | 'chickenMcNuggets'
  | 'cocaCola'
  | 'sprite'
  | 'fanta'
  | 'mcShake'
  | 'vanillaCone'
  | 'hotFudgeSundae'