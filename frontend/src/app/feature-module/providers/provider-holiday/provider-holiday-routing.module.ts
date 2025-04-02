import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderHolidayComponent } from './provider-holiday.component';

const routes: Routes = [{ path: '', component: ProviderHolidayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderHolidayRoutingModule { }
