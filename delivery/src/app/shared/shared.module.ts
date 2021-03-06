import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
