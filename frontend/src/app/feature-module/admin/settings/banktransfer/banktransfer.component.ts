import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-banktransfer',
  templateUrl: './banktransfer.component.html',
  styleUrls: ['./banktransfer.component.css']
})
export class BanktransferComponent {
  public routes = routes;
}
