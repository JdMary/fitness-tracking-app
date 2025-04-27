import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionRoutingModule,
    NgApexchartsModule,
    CommonModule,
    FormsModule,        
    MatSelectModule,    
    MatOptionModule 
  ]
})
export class SubscriptionModule { }
