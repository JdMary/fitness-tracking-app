import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCountriesComponent } from './edit-countries.component';

const routes: Routes = [{ path: '', component: EditCountriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCountriesRoutingModule { }
