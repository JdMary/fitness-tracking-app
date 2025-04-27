import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AIComponent } from './ai.component';
import { CommonModule } from '@angular/common';
import { AiRoutingModule } from './ai-routing.module';

@NgModule({
  declarations: [AIComponent],
  imports: [
    CommonModule,
    FormsModule,
    AiRoutingModule
  ],

})
export class AiModule { }
