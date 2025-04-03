import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarSettingsComponent } from './calendar-settings.component';

const routes: Routes = [{ path: '', component: CalendarSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarSettingsRoutingModule { }
