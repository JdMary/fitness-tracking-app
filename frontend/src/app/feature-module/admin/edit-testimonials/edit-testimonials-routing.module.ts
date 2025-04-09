import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTestimonialsComponent } from './edit-testimonials.component';

const routes: Routes = [{ path: '', component: EditTestimonialsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTestimonialsRoutingModule { }
