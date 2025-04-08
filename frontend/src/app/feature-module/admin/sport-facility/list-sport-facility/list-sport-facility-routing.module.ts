import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSportFacilityComponent } from './list-sport-facility.component';

const routes: Routes = [
  { path: '', component: ListSportFacilityComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListSportFacilityRoutingModule { }
