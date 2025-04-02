import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookServiceRoutingModule } from './book-service-routing.module';
import { BookServiceComponent } from './book-service.component';
import { ServiceModalComponent } from './service-modal/service-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    BookServiceComponent,
    ServiceModalComponent
  ],
  imports: [
    CommonModule,
    BookServiceRoutingModule,
    SharedModule,
    NgbModalModule
  ]
})
export class BookServiceModule { }
