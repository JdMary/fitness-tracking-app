import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-cronjob',
  templateUrl: './cronjob.component.html',
  styleUrls: ['./cronjob.component.css']
})
export class CronjobComponent {
  public routes = routes;
}
