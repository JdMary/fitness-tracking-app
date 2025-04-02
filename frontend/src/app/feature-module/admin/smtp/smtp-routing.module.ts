import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmtpComponent } from './smtp.component';

const routes: Routes = [{ path: '', component: SmtpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmtpRoutingModule { }
