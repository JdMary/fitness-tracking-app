import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareOnFacebookComponent } from './share-on-facebook.component';
import { ShareOnFacebookRoutingModule } from './share-on-facebook-routing.module';

@NgModule({
  declarations: [ShareOnFacebookComponent],
  imports: [
    CommonModule,
    ShareOnFacebookRoutingModule
  ]
})
export class ShareOnFacebookModule { }
