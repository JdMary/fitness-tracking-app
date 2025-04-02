import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProvidersComponent } from './user-providers.component';

const routes: Routes = [{ path: '', component: UserProvidersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProvidersRoutingModule { }
