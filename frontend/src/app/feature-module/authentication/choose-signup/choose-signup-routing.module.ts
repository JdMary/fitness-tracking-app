import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseSignupComponent } from './choose-signup.component';

const routes: Routes = [{ path: '', component: ChooseSignupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseSignupRoutingModule { }
