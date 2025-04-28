import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExerciceRoutingModule} from "./exercice-routing.module";
import {SharedModule} from "../../../../shared/shared.module";
import {ExerciceComponent} from "./exercice.component";
import {ExerciceDetailsModule} from "./exercice-details/exercice-details.module";


@NgModule({
  declarations: [
    ExerciceComponent,
    
    ],
  exports: [
    ExerciceComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,


  ]
})
export class ExerciceModule { }
