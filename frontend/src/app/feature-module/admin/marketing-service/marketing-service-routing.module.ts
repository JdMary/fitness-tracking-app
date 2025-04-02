import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingServiceComponent } from './marketing-service.component';

const routes: Routes = [{ path: '', component: MarketingServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingServiceRoutingModule { }
