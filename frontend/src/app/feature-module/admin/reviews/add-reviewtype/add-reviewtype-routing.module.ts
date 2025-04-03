import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewtypeComponent } from './add-reviewtype.component';

const routes: Routes = [{ path: '', component: AddReviewtypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddReviewtypeRoutingModule { }
