import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExerciceRoutingModule} from "./exercice-routing.module";
import {SharedModule} from "../../../../shared/shared.module";
import {ExerciceComponent} from "./exercice.component";
import {CustomersHeaderComponent} from "../common/customers-header/customers-header.component";
import {ExerciceDetailsModule} from "./exercice-details/exercice-details.module";


@NgModule({
  declarations: [
    ExerciceComponent,
    CustomersHeaderComponent,
    ],
  exports: [
    ExerciceComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    SharedModule,
    ExerciceDetailsModule


  ]
})
export class ExerciceModule { }
