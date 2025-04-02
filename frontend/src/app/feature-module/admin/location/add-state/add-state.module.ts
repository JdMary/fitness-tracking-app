import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStateRoutingModule } from './add-state-routing.module';
import { AddStateComponent } from './add-state.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddStateComponent
  ],
  imports: [
    CommonModule,
    AddStateRoutingModule,
    SharedModule
  ]
})
export class AddStateModule { }
