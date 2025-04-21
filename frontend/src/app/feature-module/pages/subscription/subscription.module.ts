import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSubscriptionsComponent } from './user-subscriptions/user-subscriptions.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserSubscriptionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SubscriptionRoutingModule, // ✅ il faut importer le routing de ce module (pas `RouterModule.forChild(routes)`)
    MatSelectModule,
    MatSliderModule,
  ]
})
export class SubscriptionModule {}
