import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Slide } from '../../../models/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides: Slide[];
  meals: Product[];

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        image: 'assets/images/big-mac_slide.png',
        product: {
          name: 'Big Mac',
          description:
            'Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese.',
          image: 'assets/images/big-mac.jpg',
          price: 3.99,
        },
      },
      {
        image: 'assets/images/mcshake_slide.jpg',
        product: {
          name: 'McShake',
          description:
            'McDonald’s McShake is a delicious dessert made with our creamy vanilla soft serve and a syrup of your choice, topped with whipped topping. Available in Small, Medium and Large.',
          image: 'assets/images/mcshake.jpg',
          price: 2.59,
        },
      },
    ];

    this.meals = [
      {
        name: 'Big Mac Meal',
        description:
          'The one and only McDonald’s Big Mac Combo Meal. Big Mac Ingredients include a classic sesame hamburger bun, Big Mac Sauce, American cheese and sliced pickles. The Big Mac Combo Meal is served with our World Famous Fries and your choice of an icy Coca-Cola fountain drink.',
        image: 'assets/images/big-mac-meal.jpg',
        price: 5.99,
      },
      {
        name: 'Cheeseburger Meal',
        description:
          'Our Cheeseburger Combo Meal is a simple, satisfying classic McDonald’s 100% beef burger, served with our World Famous Fries and your choice of a Medium McDonald’s soda or soft drink.',
        image: 'assets/images/cheeseburger-meal.jpg',
        price: 4.89,
      },
      {
        name: 'Quarter Pounder Meal',
        description:
          'Refuel with a Quarter Pounder with Cheese made with fresh beef that’s cooked when you order. The Quarter Pounder with Cheese Combo Meal is served with our World Famous Fries and your choice of an icy medium fountain drink.',
        image: 'assets/images/quarter-pounder-meal.jpg',
        price: 5.79,
      },
    ];
  }

  addToCart(products: Product[]) {
    console.log(products);
  }
}
