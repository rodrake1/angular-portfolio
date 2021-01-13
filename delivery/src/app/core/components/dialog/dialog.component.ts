import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, SubMenu } from '../../../models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  options: SubMenu[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product) {}

  ngOnInit(): void {
    this.options = this.data.options
  }
}
