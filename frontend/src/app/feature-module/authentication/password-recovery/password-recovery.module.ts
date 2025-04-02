import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRecoveryRoutingModule } from './password-recovery-routing.module';
import { PasswordRecoveryComponent } from './password-recovery.component';


@NgModule({
  declarations: [
    PasswordRecoveryComponent
  ],
  imports: [
    CommonModule,
    PasswordRecoveryRoutingModule
  ]
})
export class PasswordRecoveryModule { }
