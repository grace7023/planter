import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PlantListComponent } from './plant-list/plant-list.component';

@NgModule({
  declarations: [
    PlantListComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule
  ]
})
export class PlantModule { }
