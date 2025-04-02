import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EditServiceRoutingModule } from './edit-service-routing.module';
import { EditServiceComponent } from './edit-service.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditServiceComponent
  ],
  imports: [
    CommonModule,
    EditServiceRoutingModule,
    SharedModule
  ],
  providers: [
    DatePipe,
  ]
})
export class EditServiceModule { }
