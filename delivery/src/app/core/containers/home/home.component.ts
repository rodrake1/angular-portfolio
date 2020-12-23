import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Slide } from '../../../models/slide';
import { menu, SubMenu } from '../../../../assets/menu/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides: Slide[];
  meals: SubMenu;
  sandwiches: SubMenu;
  sides: SubMenu;
  beverages: SubMenu;
  desserts: SubMenu;

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        image: 'assets/images/big-mac_slide.png',
        product: menu.sandwiches.bigMac
      },
      {
        image: 'assets/images/mcshake_slide.jpg',
        product: menu.desserts.mcShake,
      },
    ];

    this.meals = menu.meals;
    this.sandwiches = menu.sandwiches;
    this.sides = menu.sides;
    this.beverages = menu.beverages;
    this.desserts = menu.desserts;
  }

  addToCart(products: Product[]) {
    console.log(products);
  }
}
