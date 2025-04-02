import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditStateRoutingModule } from './edit-state-routing.module';
import { EditStateComponent } from './edit-state.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditStateComponent
  ],
  imports: [
    CommonModule,
    EditStateRoutingModule,
    SharedModule
  ]
})
export class EditStateModule { }
