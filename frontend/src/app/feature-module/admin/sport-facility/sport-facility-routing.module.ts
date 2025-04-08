import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportFacilityComponent } from './sport-facility.component';

const routes: Routes = [
  { path: '', component: SportFacilityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportFacilityRoutingModule { }
