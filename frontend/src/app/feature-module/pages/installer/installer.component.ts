import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-installer',
  templateUrl: './installer.component.html',
  styleUrls: ['./installer.component.css'],
})
export class InstallerComponent {
  public activeIndex = 0;
  public routes = routes;
  public nextBtn(index: number) {
    this.activeIndex = index;
  }

  public prevBtn(index: number) {
    this.activeIndex = index;
  }
}
