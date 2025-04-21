import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsChallengeComponent } from './details-challenge.component';
import { DetailsChallengeRoutingModule } from './details-challenge-routing.module';

@NgModule({
  declarations: [DetailsChallengeComponent],
  imports: [
    CommonModule,
    DetailsChallengeRoutingModule
  ]
})
export class DetailsChallengeModule {}
