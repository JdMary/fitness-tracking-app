import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographySettingsComponent } from './typography-settings.component';

const routes: Routes = [{ path: '', component: TypographySettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypographySettingsRoutingModule { }
