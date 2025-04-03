import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-staff-grid',
  templateUrl: './staff-grid.component.html',
  styleUrl: './staff-grid.component.css'
})
export class StaffGridComponent {
  public routes = routes

}
