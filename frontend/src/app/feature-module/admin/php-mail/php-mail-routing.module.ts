import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhpMailComponent } from './php-mail.component';

const routes: Routes = [{ path: '', component: PhpMailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhpMailRoutingModule { }
