import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedServicesComponent } from './deleted-services.component';

const routes: Routes = [{ path: '', component: DeletedServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletedServicesRoutingModule { }
