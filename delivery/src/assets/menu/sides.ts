import { Product } from "src/app/models/product";
import { SubMenu } from "./menu";

export const frenchFries: Product = {
  name: 'French Fries',
  description:
    'Our World Famous Fries are made with premium potatoes such as the Russet Burbank and the Shepody. With 0g of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside.',
  image: 'assets/images/french-fries.jpg',
  price: 1.79,
};

export const chickenMcNuggets: Product = {
  name: 'Chicken McNuggets',
  description:
    'Our tender, juicy Chicken McNuggets® are made with 100% white meat chicken and no artificial colors, flavors or preservatives.Pair them with your favorite dipping sauces.',
  image: 'assets/images/chicken-mcnuggets.jpg',
  price: 4.49,
};

export const sides: SubMenu = {
  frenchFries,
  chickenMcNuggets
};