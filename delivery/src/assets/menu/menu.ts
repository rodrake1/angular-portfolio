import { Product } from "../../app/models/product";

export const Menu = {
  meals: {
    bigMacMeal: {
      name: 'Big Mac Meal',
      description:
        'The one and only McDonald’s Big Mac Combo Meal. Big Mac Ingredients include a classic sesame hamburger bun, Big Mac Sauce, American cheese and sliced pickles. The Big Mac Combo Meal is served with our World Famous Fries and your choice of an icy Coca-Cola fountain drink.',
      image: 'assets/images/big-mac-meal.jpg',
      price: 5.99,
    },
    cheeseburgerMeal: {
      name: 'Cheeseburger Meal',
      description:
        'Our Cheeseburger Combo Meal is a simple, satisfying classic McDonald’s 100% beef burger, served with our World Famous Fries and your choice of a Medium McDonald’s soda or soft drink.',
      image: 'assets/images/cheeseburger-meal.jpg',
      price: 4.89,
    },
    quarterPounderMeal: {
      name: 'Quarter Pounder Meal',
      description:
        'Refuel with a Quarter Pounder with Cheese made with fresh beef that’s cooked when you order. The Quarter Pounder with Cheese Combo Meal is served with our World Famous Fries and your choice of an icy medium fountain drink.',
      image: 'assets/images/quarter-pounder-meal.jpg',
      price: 5.79,
    },
  },

  sandwiches: {
    bigMac: {
      name: 'Big Mac',
      description:
        'Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese.',
      image: 'assets/images/big-mac.jpg',
      price: 3.99,
    },
    cheeseburger: {
      name: 'Cheeseburger',
      description:
        'Our simple, classic cheeseburger begins with a 100% pure beef burger seasoned with just a pinch of salt and pepper. The McDonald’s Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese.',
      image: 'assets/images/cheeseburger.jpg',
      price: 1.0,
    },
    quarterPounder: {
      name: 'Quarter Pounder',
      description:
        'Each Quarter Pounder with Cheese burger features a ¼ lb. of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun.',
      image: 'assets/images/quarter-pounder.jpg',
      price: 3.79,
    },
  },

  sides: {
    FrenchFries: {
      name: 'French Fries',
      description:
        'Our World Famous Fries are made with premium potatoes such as the Russet Burbank and the Shepody. With 0g of trans fat per labeled serving, these epic fries are crispy and golden on the outside and fluffy on the inside.',
      image: 'assets/images/french-fries.jpg',
      price: 1.79,
    },
    chickenMcNuggets: {
      name: 'Chicken McNuggets',
      description:
        'Our tender, juicy Chicken McNuggets® are made with 100% white meat chicken and no artificial colors, flavors or preservatives.Pair them with your favorite dipping sauces.',
      image: 'assets/images/chicken-mcnuggets.jpg',
      price: 4.49,
    },
  },

  beverages: {
    cocaCola: {
      name: 'Coca-Cola',
      description:
        'Coca-Cola is a refreshing McDonald’s soda option that complements all of your menu favorites.',
      image: 'assets/images/coca-cola.jpg',
      price: 1.29,
    },
    sprite: {
      name: 'Sprite',
      description:
        'Sprite fountain drink has a delicious lemon-lime taste. Sprite is a caffeine-free soft drink and makes the perfect addition to any McDonald’s Combo Meal.',
      image: 'assets/images/sprite.jpg',
      price: 1.29,
    },
    fanta: {
      name: 'Fanta',
      description:
        'McDonald’s Fanta Orange is a caffeine-free soft drink full of bubbly, refreshing orange flavor.',
      image: 'assets/images/fanta.jpg',
      price: 1.29,
    }
  },

  desserts: {
    mcshake: {
      name: 'McShake',
      description:
        'McDonald’s McShake is a delicious dessert made with our creamy vanilla soft serve and a syrup of your choice, topped with whipped topping. Available in Small, Medium and Large.',
      image: 'assets/images/mcshake.jpg',
      price: 2.59,
    },
    vanillaCone: {
      name: 'Vanilla Cone',
      description:
        'Enjoy our creamy vanilla soft serve in a crispy cone! It’s the perfect sweet treat in addition to any McDonald’s meal or on its own!',
      image: 'assets/images/vanilla-cone.jpg',
      price: 1.00,
    },
    hotFudgeSundae: {
      name: 'Hot Fudge Sundae',
      description:
        'Our classic hot fudge sundae is made with creamy vanilla soft serve and smothered in chocolaty hot fudge topping.',
      image: 'assets/images/hot-fudge-sundae.jpg',
      price: 1.29,
    },
  },
};

export interface MenuItems {
  [key: string]: Product
}