import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExerciceDetailsRoutingModule} from "./exercice-details-routing.module";
import {ExerciceDetailsComponent} from "./exercice-details.component";
@NgModule({
  declarations: [
    ExerciceDetailsComponent,
    ],
  exports: [
    ExerciceDetailsRoutingModule
  ],
  imports: [
    CommonModule,
    ExerciceDetailsRoutingModule,


  ]
})
export class ExerciceDetailsModule { }
