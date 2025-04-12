import {Component, ViewEncapsulation} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {routes} from "../../../shared/routes/routes";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class WorkoutsComponent {

  protected readonly routes = routes;
}
