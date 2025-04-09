import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailStorageSettingsComponent } from './email-storage-settings.component';

const routes: Routes = [{ path: '', component: EmailStorageSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailStorageSettingsRoutingModule { }
