import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersComponent } from './providers.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProvidersHeaderComponent } from './common/providers-header/providers-header.component';
import { ProvidersSidebarComponent } from './common/providers-sidebar/providers-sidebar.component';

@NgModule({
  declarations: [
    ProvidersComponent,
    ProvidersHeaderComponent,
    ProvidersSidebarComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
    SharedModule,
  ],
})
export class ProvidersModule { }
