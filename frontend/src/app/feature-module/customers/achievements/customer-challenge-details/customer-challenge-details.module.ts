import { NgModule } from '@angular/core';
import { CustomerChallengeDetailsRoutingModule } from './customer-challenge-details-routing.module';
import { CustomerChallengeDetailsComponent } from './customer-challenge-details.component';
import { CommonModule } from '@angular/common'; // Ajoute ça pour le pipe date

@NgModule({
  declarations: [CustomerChallengeDetailsComponent],
  imports: [
    CommonModule,
    CustomerChallengeDetailsRoutingModule
  ]
})
export class CustomerChallengeDetailsModule {
  constructor() {
    console.log('✅ CustomerChallengeDetailsModule initialisé');
  }
}
