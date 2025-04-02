import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerChatComponent } from './customer-chat.component';

const routes: Routes = [{ path: '', component: CustomerChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerChatRoutingModule { }
