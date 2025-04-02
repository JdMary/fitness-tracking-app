import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderReviewsComponent } from './provider-reviews.component';

const routes: Routes = [{ path: '', component: ProviderReviewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderReviewsRoutingModule { }
