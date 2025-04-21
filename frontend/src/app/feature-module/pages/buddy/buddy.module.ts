import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddyRoutingModule } from './buddy-routing.module';
import { BuddyComponent } from './buddy.component';


@NgModule({
    declarations: [
        BuddyComponent
        ],
  imports: [
    CommonModule,
    BuddyRoutingModule
  ]
})
export class BuddyModule { }