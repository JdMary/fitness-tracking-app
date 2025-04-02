import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbuseReportsComponent } from './abuse-reports.component';

const routes: Routes = [{ path: '', component: AbuseReportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbuseReportsRoutingModule { }
