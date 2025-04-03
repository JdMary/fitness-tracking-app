import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMessagesViewComponent } from './contact-messages-view.component';

const routes: Routes = [{ path: '', component: ContactMessagesViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactMessagesViewRoutingModule { }
