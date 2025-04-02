import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProvidersRoutingModule } from './user-providers-routing.module';
import { UserProvidersComponent } from './user-providers.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserProvidersComponent
  ],
  imports: [
    CommonModule,
    UserProvidersRoutingModule,
    SharedModule
  ]
})
export class UserProvidersModule { }
