import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderLeaveHistoryComponent } from './provider-leave-history.component';

const routes: Routes = [{ path: '', component: ProviderLeaveHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderLeaveHistoryRoutingModule { }
