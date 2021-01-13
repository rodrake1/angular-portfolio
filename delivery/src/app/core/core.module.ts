import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HomeComponent } from './containers/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    CardGridComponent,
    CardComponent,
    DialogComponent,
  ],
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
