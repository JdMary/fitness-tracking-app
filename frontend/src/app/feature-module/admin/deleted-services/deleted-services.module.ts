import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeletedServicesRoutingModule } from './deleted-services-routing.module';
import { DeletedServicesComponent } from './deleted-services.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DeletedServicesComponent
  ],
  imports: [
    CommonModule,
    DeletedServicesRoutingModule,
    SharedModule
  ]
})
export class DeletedServicesModule { }
