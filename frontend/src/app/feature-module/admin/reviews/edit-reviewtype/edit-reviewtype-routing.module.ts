import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditReviewtypeComponent } from './edit-reviewtype.component';

const routes: Routes = [{ path: '', component: EditReviewtypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditReviewtypeRoutingModule { }
