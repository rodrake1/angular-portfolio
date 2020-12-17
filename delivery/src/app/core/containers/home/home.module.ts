import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardComponent } from '../../components/card/card.component';
import { CardGridComponent } from '../../components/card-grid/card-grid.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, CarouselComponent, CardGridComponent, CardComponent],
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
