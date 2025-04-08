import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportFacilityComponent } from './sport-facility.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ nécessaire pour ngModel
import { SportFacilityRoutingModule } from './sport-facility-routing.module';

const routes: Routes = [
  { path: '', component: SportFacilityComponent }
];

@NgModule({
  declarations: [
    SportFacilityComponent // ✅ Ici dans declarations
  ],
  imports: [
    CommonModule,
    FormsModule, // ✅ Correct ici
    RouterModule.forChild(routes),
    SportFacilityRoutingModule, // ✅ Correct ici
  ]
})
export class SportFacilityModule { }
