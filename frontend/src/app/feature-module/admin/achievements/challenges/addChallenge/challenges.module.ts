import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChallengesComponent } from './challenges.component';
import { ChallengesRoutingModule } from './challenges-routing.module';

@NgModule({
  declarations: [
    ChallengesComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChallengesRoutingModule
  ]
})
export class ChallengesModule {
  constructor() {
    console.log('✅ ChallengesModule initialisé');
  }
}
