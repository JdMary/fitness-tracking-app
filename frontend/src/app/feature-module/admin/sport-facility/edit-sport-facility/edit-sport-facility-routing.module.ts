import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSportFacilityComponent } from './edit-sport-facility.component';

const routes: Routes = [
  { path: ':id', component: EditSportFacilityComponent } // on récupère l'ID dans l'URL
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSportFacilityRoutingModule { }
