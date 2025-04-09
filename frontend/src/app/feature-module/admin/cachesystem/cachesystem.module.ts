import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CachesystemRoutingModule } from './cachesystem-routing.module';
import { CachesystemComponent } from './cachesystem.component';


@NgModule({
  declarations: [
    CachesystemComponent
  ],
  imports: [
    CommonModule,
    CachesystemRoutingModule
  ]
})
export class CachesystemModule { }
