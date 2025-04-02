import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-ban-ip-address',
  templateUrl: './ban-ip-address.component.html',
  styleUrls: ['./ban-ip-address.component.css']
})
export class BanIpAddressComponent {
  public routes = routes;
}
