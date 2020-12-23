import { ProductCombo } from 'src/app/models/product';
import { SubMenu } from './menu';
import { bigMac } from './sandwiches';
import { frenchFries, chickenMcNuggets } from './sides';
import { cocaCola, sprite, fanta } from './beverages';

export const bigMacMeal: ProductCombo = {
  name: 'Big Mac Meal',
  description:
    'The one and only McDonald’s Big Mac Combo Meal. Big Mac Ingredients include a classic sesame hamburger bun, Big Mac Sauce, American cheese and sliced pickles. The Big Mac Combo Meal is served with our World Famous Fries and your choice of an icy Coca-Cola fountain drink.',
  image: 'assets/images/big-mac-meal.jpg',
  price: 5.99,
  options: [
    {
      required: true,
      quantity: 1,
      sandwiches: {
        bigMac,
      },
    },
    {
      required: true,
      quantity: 1,
      sides: {
        frenchFries,
        chickenMcNuggets,
      },
    },
    {
      required: true,
      quantity: 1,
      beverages: {
        cocaCola,
        sprite,
        fanta,
      },
    },
  ],
};

export const cheeseburgerMeal: ProductCombo = {
  name: 'Cheeseburger Meal',
  description:
    'Our Cheeseburger Combo Meal is a simple, satisfying classic McDonald’s 100% beef burger, served with our World Famous Fries and your choice of a Medium McDonald’s soda or soft drink.',
  image: 'assets/images/cheeseburger-meal.jpg',
  price: 4.89,
};

export const quarterPounderMeal: ProductCombo = {
  name: 'Quarter Pounder Meal',
  description:
    'Refuel with a Quarter Pounder with Cheese made with fresh beef that’s cooked when you order. The Quarter Pounder with Cheese Combo Meal is served with our World Famous Fries and your choice of an icy medium fountain drink.',
  image: 'assets/images/quarter-pounder-meal.jpg',
  price: 5.79,
};

export const meals: SubMenu = {
  bigMacMeal,
  cheeseburgerMeal,
  quarterPounderMeal,
};
