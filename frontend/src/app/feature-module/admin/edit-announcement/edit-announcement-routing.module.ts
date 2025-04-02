import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAnnouncementComponent } from './edit-announcement.component';

const routes: Routes = [{ path: '', component: EditAnnouncementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditAnnouncementRoutingModule { }
