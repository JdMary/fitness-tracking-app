import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-php-mail',
  templateUrl: './php-mail.component.html',
  styleUrls: ['./php-mail.component.css']
})
export class PhpMailComponent {
  public routes = routes;
}
