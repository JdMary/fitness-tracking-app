import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewTypeComponent } from './review-type.component';

const routes: Routes = [{ path: '', component: ReviewTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewTypeRoutingModule { }
