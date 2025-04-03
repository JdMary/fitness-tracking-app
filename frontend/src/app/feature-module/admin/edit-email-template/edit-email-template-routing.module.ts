import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmailTemplateComponent } from './edit-email-template.component';

const routes: Routes = [{ path: '', component: EditEmailTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditEmailTemplateRoutingModule { }
