import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './containers/home/home.module';

@NgModule({
  imports: [CommonModule, HomeModule],
})
export class CoreModule {}
