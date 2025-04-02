import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProviderComponent } from './edit-provider.component';

const routes: Routes = [{ path: '', component: EditProviderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProviderRoutingModule { }
