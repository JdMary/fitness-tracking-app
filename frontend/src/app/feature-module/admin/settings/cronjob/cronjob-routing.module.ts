import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronjobComponent } from './cronjob.component';

const routes: Routes = [{ path: '', component: CronjobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronjobRoutingModule { }
