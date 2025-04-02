import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-login-phone1',
  templateUrl: './login-phone1.component.html',
  styleUrls: ['./login-phone1.component.css']
})
export class LoginPhone1Component {
  public routes = routes;
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });
}
