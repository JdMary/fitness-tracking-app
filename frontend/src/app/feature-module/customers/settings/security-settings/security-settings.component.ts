import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.css']
})
export class SecuritySettingsComponent {
  public routes = routes;
  public passwordClass1 = false;
  public passwordClass2 = false;
  public passwordClass3 = false;
  public passwordClass4 = false;
  public passwordClass5 = false;

  togglePassword1() {
    this.passwordClass1 = !this.passwordClass1;
  }
  togglePassword2() {
    this.passwordClass2 = !this.passwordClass2;
  }
  togglePassword3() {
    this.passwordClass3 = !this.passwordClass3;
  }
  togglePassword4() {
    this.passwordClass4 = !this.passwordClass4;
  }
  togglePassword5() {
    this.passwordClass5 = !this.passwordClass5;
  }
}
