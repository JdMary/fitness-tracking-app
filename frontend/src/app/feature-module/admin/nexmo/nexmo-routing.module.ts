import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NexmoComponent } from './nexmo.component';

const routes: Routes = [{ path: '', component: NexmoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NexmoRoutingModule { }
