import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailablePluginsComponent } from './available-plugins.component';

const routes: Routes = [{ path: '', component: AvailablePluginsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvailablePluginsRoutingModule { }
