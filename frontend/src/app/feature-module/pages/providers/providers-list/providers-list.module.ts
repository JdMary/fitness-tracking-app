import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersListRoutingModule } from './providers-list-routing.module';
import { ProvidersListComponent } from './providers-list.component';


@NgModule({
  declarations: [
    ProvidersListComponent
  ],
  imports: [
    CommonModule,
    ProvidersListRoutingModule
  ]
})
export class ProvidersListModule { }
