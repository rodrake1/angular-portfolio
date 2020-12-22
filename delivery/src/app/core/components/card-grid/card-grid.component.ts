import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {
  @Input() products: KeyValue<string, Product>;

  @Output() onClick = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  handleClick(name: string) {
    this.onClick.emit(this.products[name]);
  }

}
