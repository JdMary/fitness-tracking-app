import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSmsTemplateComponent } from './edit-sms-template.component';

const routes: Routes = [{ path: '', component: EditSmsTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSmsTemplateRoutingModule { }
