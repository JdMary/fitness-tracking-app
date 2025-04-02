import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-aws-storage',
  templateUrl: './aws-storage.component.html',
  styleUrls: ['./aws-storage.component.css']
})
export class AwsStorageComponent {
  public routes = routes;
}
