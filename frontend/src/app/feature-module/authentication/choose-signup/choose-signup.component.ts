import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-choose-signup',
  templateUrl: './choose-signup.component.html',
  styleUrls: ['./choose-signup.component.css']
})
export class ChooseSignupComponent {
  public routes = routes;
}
