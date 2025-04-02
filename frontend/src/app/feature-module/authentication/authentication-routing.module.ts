import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'authentication',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'choose-signup',
        loadChildren: () =>
          import('./choose-signup/choose-signup.module').then(
            (m) => m.ChooseSignupModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./user-signup/user-signup.module').then(
            (m) => m.UserSignupModule
          ),
      },
      {
        path: 'provider-register',
        loadChildren: () =>
          import('./provider-signup/provider-signup.module').then(
            (m) => m.ProviderSignupModule
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
      },
      {
        path: 'password-recovery',
        loadChildren: () =>
          import('./password-recovery/password-recovery.module').then(
            (m) => m.PasswordRecoveryModule
          ),
      },
      {
        path: 'phone-otp',
        loadChildren: () =>
          import('./phone-otp/phone-otp.module').then((m) => m.PhoneOtpModule),
      },
      {
        path: 'email-otp',
        loadChildren: () =>
          import('./email-otp/email-otp.module').then((m) => m.EmailOtpModule),
      },
      {
        path: 'free-trial',
        loadChildren: () =>
          import('./free-trial/free-trial.module').then(
            (m) => m.FreeTrialModule
          ),
      },
      {
        path: 'login-email',
        loadChildren: () =>
          import('./login-email/login-email.module').then(
            (m) => m.LoginEmailModule
          ),
      },
      {
        path: 'login-phone',
        loadChildren: () =>
          import('./login-phone/login-phone.module').then(
            (m) => m.LoginPhoneModule
          ),
      },
      {
        path: 'login-phone1',
        loadChildren: () =>
          import('./login-phone1/login-phone1.module').then(
            (m) => m.LoginPhone1Module
          ),
      },
      {
        path: 'change-password',
        loadChildren: () =>
          import('./change-password/change-password.module').then(
            (m) => m.ChangePasswordModule
          ),
      },
      {
        path: 'provider-signup-payment',
        loadChildren: () =>
          import(
            './provider-signup-payment/provider-signup-payment.module'
          ).then((m) => m.ProviderSignupPaymentModule),
      },
      {
        path: 'provider-signup-subscription',
        loadChildren: () =>
          import(
            './provider-signup-subscription/provider-signup-subscription.module'
          ).then((m) => m.ProviderSignupSubscriptionModule),
      },
      {
        path: 'success',
        loadChildren: () =>
          import('./success/success.module').then((m) => m.SuccessModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
