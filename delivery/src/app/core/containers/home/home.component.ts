import { Component, OnInit } from '@angular/core';
import { Product, Slide, SubMenu } from '../../../models';
import { menu } from '../../../../assets/menu/menu';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slides: Slide[];
  menu: KeyValue<string, SubMenu>;

  constructor() {}

  ngOnInit(): void {
    this.slides = [
      {
        image: 'assets/images/big-mac_slide.png',
        product: menu.sandwiches.products.bigMac,
      },
      {
        image: 'assets/images/mcshake_slide.jpg',
        product: menu.desserts.products.mcShake,
      },
    ];

    this.menu = menu;
    console.log(this.menu);
  }

  get meals() {
    return menu.meals.products;
  }

  get sandwiches() {
    return menu.sandwiches.products;
  }

  get sides() {
    return menu.sides.products;
  }

  get beverages() {
    return menu.beverages.products;
  }

  get desserts() {
    return menu.desserts.products;
  }

  addToCart(products: Product[]) {
    console.log(products);
  }
}
