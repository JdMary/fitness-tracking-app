import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-customer-footer',
  templateUrl: './customer-footer.component.html',
  styleUrl: './customer-footer.component.css'
})
export class CustomerFooterComponent {
public routes = routes
}
