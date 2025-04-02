import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesListComponent } from './pages-list.component';

const routes: Routes = [{ path: '', component: PagesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesListRoutingModule { }
