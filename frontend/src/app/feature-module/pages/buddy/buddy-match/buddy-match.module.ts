import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddyMatchRoutingModule } from './buddy-match-routing.module';
import { BuddyMatchComponent } from './buddy-match.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormatGoalPipe } from './format-goal.pipe';



@NgModule({
  declarations: [
    BuddyMatchComponent,
    FormatGoalPipe
    ],
  imports: [
    CommonModule,
    BuddyMatchRoutingModule,
    SharedModule
  ]
})
export class BuddyMatchModule { }  