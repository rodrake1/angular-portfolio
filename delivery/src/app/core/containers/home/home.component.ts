import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Slide } from '../../../models/slide';
import { Menu, MenuItems } from '../../../../assets/menu/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides: Slide[];
  meals: MenuItems;
  sandwiches: MenuItems;
  sides: MenuItems;
  beverages: MenuItems;
  desserts: MenuItems;

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        image: 'assets/images/big-mac_slide.png',
        product: Menu.sandwiches.bigMac
      },
      {
        image: 'assets/images/mcshake_slide.jpg',
        product: Menu.desserts.mcshake,
      },
    ];

    this.meals = Menu.meals;
    this.sandwiches = Menu.sandwiches;
    this.sides = Menu.sides;
    this.beverages = Menu.beverages;
    this.desserts = Menu.desserts;
  }

  addToCart(products: Product[]) {
    console.log(products);
  }
}
