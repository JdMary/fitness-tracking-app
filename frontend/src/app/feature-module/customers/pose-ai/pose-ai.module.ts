import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoseAiRoutingModule } from './pose-ai-routing.module';
import { PoseAiComponent } from './pose-ai.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PoseAiComponent
  ],
  imports: [
    CommonModule,
    PoseAiRoutingModule,
    SharedModule
  ]
})
export class PoseAiModule { }
