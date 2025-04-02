import { Component  } from '@angular/core';

import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-booking2',
  templateUrl: './booking2.component.html',
  styleUrls: ['./booking2.component.css'],

})
export class Booking2Component  {
  public routes = routes;
  selected!: Date | null;
  
}
