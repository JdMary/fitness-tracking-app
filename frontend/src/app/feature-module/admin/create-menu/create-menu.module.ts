import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMenuRoutingModule } from './create-menu-routing.module';
import { CreateMenuComponent } from './create-menu.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreateMenuComponent
  ],
  imports: [
    CommonModule,
    CreateMenuRoutingModule,
    SharedModule
  ]
})
export class CreateMenuModule { }
