import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReviewsComponent } from './customer-reviews.component';

const routes: Routes = [{ path: '', component: CustomerReviewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerReviewsRoutingModule { }
