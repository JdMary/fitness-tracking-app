import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSportFacilityComponent } from './list-sport-facility/list-sport-facility.component';

import { SportFacilityRoutingModule } from './sport-facility-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FacilityDetailComponent } from './sport-facility-details/sport-facility-details.component'; 
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    ListSportFacilityComponent,
    FacilityDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SportFacilityRoutingModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
  ]
})
export class SportFacilityModule { }
