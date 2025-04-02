import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {
  public routes = routes;
}
