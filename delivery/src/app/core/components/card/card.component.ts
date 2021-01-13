import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit(): void {}

  get name() {
    return this.product.name;
  }

  get description() {
    return this.product.description;
  }

  get price() {
    return this.product.price;
  }

  get image() {
    return this.product.image;
  }
}
