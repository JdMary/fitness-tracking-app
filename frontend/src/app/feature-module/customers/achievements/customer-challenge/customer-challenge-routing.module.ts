import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerChallengeComponent } from './customer-challenge.component';


const routes: Routes = [{ path: '', component: CustomerChallengeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerChallengeRoutingModule { }
