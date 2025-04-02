import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwsStorageComponent } from './aws-storage.component';

const routes: Routes = [{ path: '', component: AwsStorageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwsStorageRoutingModule { }
