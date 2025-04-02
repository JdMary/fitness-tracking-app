import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhpMailRoutingModule } from './php-mail-routing.module';
import { PhpMailComponent } from './php-mail.component';


@NgModule({
  declarations: [
    PhpMailComponent
  ],
  imports: [
    CommonModule,
    PhpMailRoutingModule
  ]
})
export class PhpMailModule { }
