import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPhone1Component } from './login-phone1.component';

const routes: Routes = [{ path: '', component: LoginPhone1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPhone1RoutingModule { }
