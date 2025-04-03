import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketingNewsletterComponent } from './marketing-newsletter.component';

const routes: Routes = [{ path: '', component: MarketingNewsletterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingNewsletterRoutingModule { }
