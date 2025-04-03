import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwsStorageRoutingModule } from './aws-storage-routing.module';
import { AwsStorageComponent } from './aws-storage.component';


@NgModule({
  declarations: [
    AwsStorageComponent
  ],
  imports: [
    CommonModule,
    AwsStorageRoutingModule
  ]
})
export class AwsStorageModule { }
