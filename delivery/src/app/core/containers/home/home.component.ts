import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides: Slide[];

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        image: 'assets/images/big-mac_slide.png',
        products: [
          {
            name: 'Big Mac',
            description:
              'Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese.',
            image: 'assets/images/big-mac.jpg',
            price: 5.71,
          },
        ],
      },
      {
        image: 'assets/images/mcshake_slide.jpg',
        products: [
          {
            name: 'McShake',
            description:
              'McDonald’s McShake is a delicious dessert made with our creamy vanilla soft serve and a syrup of your choice, topped with whipped topping. Available in Small, Medium and Large.',
            image: 'assets/images/mcshake.jpg',
            price: 2.49,
          },
        ],
      },
    ];
  }

  addToCart(products: Product[]) {
    console.log(products);
  }
}
