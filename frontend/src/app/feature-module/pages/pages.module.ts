import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesHeaderComponent } from './common/pages-header/pages-header.component';
import { PagesFooterComponent } from './common/pages-footer/pages-footer.component';


@NgModule({
  declarations: [
    PagesComponent,
    PagesHeaderComponent,
    PagesFooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
