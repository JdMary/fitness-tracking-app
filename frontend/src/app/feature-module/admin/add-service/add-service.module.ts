import { NgModule } from '@angular/core';
import { CommonModule,DatePipe } from '@angular/common';

import { AddServiceRoutingModule } from './add-service-routing.module';
import { AddServiceComponent } from './add-service.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddServiceComponent
  ],
  imports: [
    CommonModule,
    AddServiceRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe,
  ]
})
export class AddServiceModule { }
