import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateChallengeComponent } from './generate-challenge.component';
import { GenerateChallengeRoutingModule } from './generate-challenge-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenerateChallengeComponent],
  imports: [
    CommonModule,
    FormsModule,
    GenerateChallengeRoutingModule, // <- Import du routing ici
  ]
})
export class GenerateChallengeModule {}
