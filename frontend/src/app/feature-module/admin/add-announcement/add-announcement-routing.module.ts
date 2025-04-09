import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement.component';

const routes: Routes = [{ path: '', component: AddAnnouncementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddAnnouncementRoutingModule { }
