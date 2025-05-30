import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddyListRoutingModule } from './buddy-list-routing.module';
import { BuddyListComponent } from './buddy-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormatGoalPipe } from './format-goal.pipe';



@NgModule({
  declarations: [
    BuddyListComponent,
    FormatGoalPipe
    ],
  imports: [
    CommonModule,
    BuddyListRoutingModule,
    SharedModule
  ]
})
export class BuddyListModule { }  
