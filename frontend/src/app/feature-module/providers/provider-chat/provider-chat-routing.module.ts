import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderChatComponent } from './provider-chat.component';

const routes: Routes = [{ path: '', component: ProviderChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderChatRoutingModule { }
