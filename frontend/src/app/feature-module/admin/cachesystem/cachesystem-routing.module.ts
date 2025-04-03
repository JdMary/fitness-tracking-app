import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CachesystemComponent } from './cachesystem.component';

const routes: Routes = [{ path: '', component: CachesystemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CachesystemRoutingModule { }
