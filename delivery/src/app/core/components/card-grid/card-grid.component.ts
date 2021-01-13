import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../../models';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent implements OnInit {
  @Input() products: KeyValue<string, Product>;

  @Output() onClick = new EventEmitter<Product>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  handleClick(name: string) {
    this.onClick.emit(this.products[name]);
    console.log({ data: { ...this.products[name] } });
    this.dialog.open(DialogComponent, { data: { ...this.products[name] } });
  }
}
