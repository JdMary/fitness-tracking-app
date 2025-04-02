import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCityComponent } from './edit-city.component';

const routes: Routes = [{ path: '', component: EditCityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCityRoutingModule { }
