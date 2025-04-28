import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../../shared/shared.module";
import { ProgressTrackerComponent } from './progress-tracker.component';
import { ProgressTrackerRoutingModule } from './progress-tracker-routing.module';



@NgModule({
  declarations: [
    ProgressTrackerComponent,
    
    ],
  exports: [
    ProgressTrackerComponent
  ],
  imports: [
    CommonModule,
    ProgressTrackerRoutingModule,
    SharedModule,


  ]
})
export class ProgressTrackerModule { }
