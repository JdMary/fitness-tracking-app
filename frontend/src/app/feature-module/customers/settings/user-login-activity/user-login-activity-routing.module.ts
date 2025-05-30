import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginActivityComponent } from './user-login-activity.component';

const routes: Routes = [{ path: '', component: UserLoginActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLoginActivityRoutingModule { }
