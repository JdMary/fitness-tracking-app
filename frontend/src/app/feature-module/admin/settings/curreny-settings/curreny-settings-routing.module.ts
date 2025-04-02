import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenySettingsComponent } from './curreny-settings.component';

const routes: Routes = [{ path: '', component: CurrenySettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenySettingsRoutingModule { }
