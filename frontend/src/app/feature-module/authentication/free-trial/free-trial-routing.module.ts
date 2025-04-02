import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreeTrialComponent } from './free-trial.component';

const routes: Routes = [{ path: '', component: FreeTrialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreeTrialRoutingModule { }
