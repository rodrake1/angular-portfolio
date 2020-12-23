import { Product } from "src/app/models/product";
import { SubMenu } from "./menu";

export const bigMac: Product = {
  name: 'Big Mac',
  description:
    'Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese.',
  image: 'assets/images/big-mac.jpg',
  price: 3.99,
};

export const cheeseburger: Product = {
  name: 'Cheeseburger',
  description:
    'Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The McDonald’s Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese.',
  image: 'assets/images/cheeseburger.jpg',
  price: 1.0,
};

export const quarterPounder: Product = {
  name: 'Quarter Pounder',
  description:
    'Each Quarter Pounder with Cheese burger features a ¼ lb. of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun.',
  image: 'assets/images/quarter-pounder.jpg',
  price: 3.79,
};

export const sandwiches: SubMenu = {
  bigMac,
  cheeseburger,
  quarterPounder,
};