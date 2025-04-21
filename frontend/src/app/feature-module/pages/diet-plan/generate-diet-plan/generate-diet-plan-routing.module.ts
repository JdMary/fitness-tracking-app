import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateDietPlanComponent } from './generate-diet-plan.component';

const routes: Routes = [{ path: '', component: GenerateDietPlanComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateDietPlanRoutingModule { }
