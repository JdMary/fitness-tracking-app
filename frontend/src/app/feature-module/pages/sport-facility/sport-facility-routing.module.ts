import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSportFacilityComponent } from './list-sport-facility/list-sport-facility.component';
import { FacilityDetailComponent } from './sport-facility-details/sport-facility-details.component';

const routes: Routes = [
  {path: '', component: ListSportFacilityComponent},
  { path: 'details/:id', component: FacilityDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportFacilityRoutingModule { }
