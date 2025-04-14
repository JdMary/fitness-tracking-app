import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareOnFacebookComponent } from './share-on-facebook.component';

const routes: Routes = [
  { path: '', component: ShareOnFacebookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareOnFacebookRoutingModule {}
