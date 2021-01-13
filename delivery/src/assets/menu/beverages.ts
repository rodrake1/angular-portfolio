import { Product, SubMenu } from '../../app/models';

export const cocaCola: Product = {
  name: 'Coca-Cola',
  description:
    'Coca-Cola is a refreshing McDonald’s soda option that complements all of your menu favorites.',
  image: 'assets/images/coca-cola.jpg',
  price: 1.29,
};

export const sprite: Product = {
  name: 'Sprite',
  description:
    'Sprite fountain drink has a delicious lemon-lime taste. Sprite is a caffeine-free soft drink and makes the perfect addition to any McDonald’s Combo Meal.',
  image: 'assets/images/sprite.jpg',
  price: 1.29,
};

export const fanta: Product = {
  name: 'Fanta',
  description:
    'McDonald’s Fanta Orange is a caffeine-free soft drink full of bubbly, refreshing orange flavor.',
  image: 'assets/images/fanta.jpg',
  price: 1.29,
};

export const beverages: SubMenu = {
  name: 'Beverages',
  products: { cocaCola, sprite, fanta },
};
