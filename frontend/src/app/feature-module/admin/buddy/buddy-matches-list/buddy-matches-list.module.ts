import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuddyMatchesListRoutingModule } from './buddy-matches-list-routing.module';
import { BuddyMatchesListComponent } from './buddy-matches-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BuddyMatchesListComponent,
    ],
  imports: [
    CommonModule,
    BuddyMatchesListRoutingModule,
    SharedModule
  ]
})
export class BuddyMatchesModule { }  