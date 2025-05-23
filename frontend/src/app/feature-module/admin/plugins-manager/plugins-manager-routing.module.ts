import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PluginsManagerComponent } from './plugins-manager.component';

const routes: Routes = [{ path: '', component: PluginsManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PluginsManagerRoutingModule { }
