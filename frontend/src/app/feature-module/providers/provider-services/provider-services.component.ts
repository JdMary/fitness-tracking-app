import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-services',
  templateUrl: './provider-services.component.html',
  styleUrls: ['./provider-services.component.css'],
})
export class ProviderServicesComponent {
  public routes = routes;
  public selectedValue = '';

  selectedList: data[] = [{ value: 'A -> Z' }, { value: 'Most helpful' }];
}
