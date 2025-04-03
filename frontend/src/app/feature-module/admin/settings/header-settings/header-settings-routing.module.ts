import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderSettingsComponent } from './header-settings.component';

const routes: Routes = [{ path: '', component: HeaderSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderSettingsRoutingModule { }
