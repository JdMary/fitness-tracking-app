import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoseAiComponent } from './pose-ai.component';

const routes: Routes = [{ path: '', component: PoseAiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoseAiRoutingModule { }
