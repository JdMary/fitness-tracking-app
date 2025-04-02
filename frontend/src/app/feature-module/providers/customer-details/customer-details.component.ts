import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent {
  public routes = routes

}
