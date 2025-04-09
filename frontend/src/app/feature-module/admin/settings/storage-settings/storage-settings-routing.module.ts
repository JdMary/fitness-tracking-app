import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageSettingsComponent } from './storage-settings.component';

const routes: Routes = [{ path: '', component: StorageSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageSettingsRoutingModule { }
