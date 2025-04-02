import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingFeaturedComponent } from './marketing-featured.component';

const routes: Routes = [{ path: '', component: MarketingFeaturedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingFeaturedRoutingModule { }
