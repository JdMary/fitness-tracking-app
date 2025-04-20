import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe,
  ]
})
export class AddUserModule { }
