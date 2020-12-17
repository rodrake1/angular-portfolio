import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product';
import { Slide } from '../../../models/slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  index = 0;

  @Input() slides: Slide[];

  @Output() onClick = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.onClick.emit(this.slides[this.index].product);
  }

  previousSlide() {
    if (this.index === 0) {
      this.index = this.slides.length - 1;
    } else {
      this.index--;
    }
  }

  nextSlide() {
    if (this.index === this.slides.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  goToSlide(index: number) {
    this.index = index;
  }
}
