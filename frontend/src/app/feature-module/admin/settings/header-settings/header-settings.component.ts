import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { headerMenu } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface headerData {
  data : string
}
@Component({
  selector: 'app-header-settings',
  templateUrl: './header-settings.component.html',
  styleUrls: ['./header-settings.component.css'],
})
export class HeaderSettingsComponent {
  public routes = routes;
  public headerMenu: Array<headerMenu> = [];
  public headerMenuArray: headerData[] = [];
  constructor(private data: DataService) {
    this.headerMenu = this.data.headerMenu;
  }
  delete(index: number) {
    this.headerMenu.splice(index, 1);
  }
  add() {
    const newData: headerData = {
      data : ''
    };
    this.headerMenuArray.push(newData);
  }
  deleteUrl(index: number) {
    this.headerMenuArray.splice(index, 1);
  }
}
