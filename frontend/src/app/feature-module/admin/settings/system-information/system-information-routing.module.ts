import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemInformationComponent } from './system-information.component';

const routes: Routes = [{ path: '', component: SystemInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemInformationRoutingModule { }
