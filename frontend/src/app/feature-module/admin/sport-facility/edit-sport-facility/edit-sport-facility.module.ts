import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSportFacilityComponent } from './edit-sport-facility.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditSportFacilityRoutingModule } from './edit-sport-facility-routing.module';

@NgModule({
  declarations: [EditSportFacilityComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    EditSportFacilityRoutingModule
    
  ]
})
export class EditSportFacilityModule { }
