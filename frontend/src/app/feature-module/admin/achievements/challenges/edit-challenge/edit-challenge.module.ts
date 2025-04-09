import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditChallengeRoutingModule } from './edit-challenge-routing.module';
import { EditChallengeComponent } from './edit-challenge.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditChallengeComponent],
  imports: [CommonModule,
    EditChallengeRoutingModule,
    FormsModule 
  ]
})
export class EditChallengeModule { }
