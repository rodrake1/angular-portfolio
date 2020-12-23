import { Product } from 'src/app/models/product';
import { SubMenu } from './menu';

export const mcShake: Product = {
  name: 'McShake',
  description:
    'McDonald’s McShake is a delicious dessert made with our creamy vanilla soft serve and a syrup of your choice, topped with whipped topping. Available in Small, Medium and Large.',
  image: 'assets/images/mcshake.jpg',
  price: 2.59,
};

export const vanillaCone: Product = {
  name: 'Vanilla Cone',
  description:
    'Enjoy our creamy vanilla soft serve in a crispy cone! It’s the perfect sweet treat in addition to any McDonald’s meal or on its own!',
  image: 'assets/images/vanilla-cone.jpg',
  price: 1.0,
};

export const hotFudgeSundae: Product = {
  name: 'Hot Fudge Sundae',
  description:
    'Our classic hot fudge sundae is made with creamy vanilla soft serve and smothered in chocolaty hot fudge topping.',
  image: 'assets/images/hot-fudge-sundae.jpg',
  price: 1.29,
};

export const desserts: SubMenu = {
  mcShake,
  vanillaCone,
  hotFudgeSundae
};
