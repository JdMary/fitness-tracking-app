import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'all-blog',
        loadChildren: () =>
          import('./all-blog/all-blog.module').then((m) => m.AllBlogModule),
      },
      {
        path: 'add-blog',
        loadChildren: () =>
          import('./add-blog/add-blog.module').then((m) => m.AddBlogModule),
      },
      {
        path: 'blogs-categories',
        loadChildren: () =>
          import('./blogs-categories/blogs-categories.module').then(
            (m) => m.BlogsCategoriesModule
          ),
      },
      {
        path: 'blogs-comments',
        loadChildren: () =>
          import('./blogs-comments/blogs-comments.module').then(
            (m) => m.BlogsCommentsModule
          ),
      },
      {
        path: 'add-blog-categories',
        loadChildren: () =>
          import('./add-blog-categories/add-blog-categories.module').then(
            (m) => m.AddBlogCategoriesModule
          ),
      },
      {
        path: 'edit-blog-categories',
        loadChildren: () =>
          import('./edit-blog-categories/edit-blog-categories.module').then(
            (m) => m.EditBlogCategoriesModule
          ),
      },
      {
        path: 'edit-blog',
        loadChildren: () =>
          import('./edit-blog/edit-blog.module').then((m) => m.EditBlogModule),
      },
      {
        path: 'edit-categories',
        loadChildren: () =>
          import('./edit-categories/edit-categories.module').then(
            (m) => m.EditCategoriesModule
          ),
      },
      {
        path: 'inactive-blog',
        loadChildren: () =>
          import('./inactive-blog/inactive-blog.module').then(
            (m) => m.InactiveBlogModule
          ),
      },
      {
        path: 'pending-blog',
        loadChildren: () =>
          import('./pending-blog/pending-blog.module').then(
            (m) => m.PendingBlogModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
