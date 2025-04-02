import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCountriesComponent } from './add-countries.component';

const routes: Routes = [{ path: '', component: AddCountriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCountriesRoutingModule { }
