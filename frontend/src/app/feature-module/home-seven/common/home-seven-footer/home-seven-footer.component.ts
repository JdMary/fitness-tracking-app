import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-home-seven-footer',
  templateUrl: './home-seven-footer.component.html',
  styleUrls: ['./home-seven-footer.component.css']
})
export class HomeSevenFooterComponent {
  public routes = routes;
}
