import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterReportComponent } from './register-report.component';

const routes: Routes = [{ path: '', component: RegisterReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterReportRoutingModule { }
