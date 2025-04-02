import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStateComponent } from './edit-state.component';

const routes: Routes = [{ path: '', component: EditStateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditStateRoutingModule { }
