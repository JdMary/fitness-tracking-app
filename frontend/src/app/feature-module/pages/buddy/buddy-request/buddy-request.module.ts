import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddyRequestRoutingModule } from './buddy-request-routing.module';
import { BuddyRequestComponent } from './buddy-request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormatGoalPipe } from './format-goal.pipe';


@NgModule({
  declarations: [
    BuddyRequestComponent,
    FormatGoalPipe
    ],
  imports: [
    CommonModule,
    BuddyRequestRoutingModule,
    SharedModule
  ]
})
export class BuddyRequestModule { }  
