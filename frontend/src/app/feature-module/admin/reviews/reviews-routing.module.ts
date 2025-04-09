import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewsComponent,
    children: [
      {
        path: 'review-type',
        loadChildren: () =>
          import('./review-type/review-type.module').then(
            (m) => m.ReviewTypeModule
          ),
      },
      {
        path: 'review',
        loadChildren: () =>
          import('./review/review.module').then((m) => m.ReviewModule),
      },
      {
        path: 'add-reviewtype',
        loadChildren: () =>
          import('./add-reviewtype/add-reviewtype.module').then(
            (m) => m.AddReviewtypeModule
          ),
      },
      {
        path: 'edit-reviewtype',
        loadChildren: () =>
          import('./edit-reviewtype/edit-reviewtype.module').then(
            (m) => m.EditReviewtypeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {}
