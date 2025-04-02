import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { widget } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
interface copyRight {
 data : string
}
@Component({
  selector: 'app-footer-settings',
  templateUrl: './footer-settings.component.html',
  styleUrls: ['./footer-settings.component.css'],
})
export class FooterSettingsComponent {
  public routes = routes;
  public linksWidget: widget[] = [];
  public socialWidget: widget[] = [];
  public copyRight: widget[] = [];
  public copyRightArray: copyRight[] = [];


  public selectedValue = '';

  selectedList: data[] = [{ value: 'Orderby(ASC)' }, { value: 'ASC' }];
  constructor(private data: DataService) {
    this.linksWidget = this.data.linksWidget;
    this.socialWidget = this.data.socialWidget;
    this.copyRight = this.data.copyRight;
  }
  deleteLinksWidget(index: number) {
    this.linksWidget.splice(index, 1);
  }
  deleteSocialWidget(index: number) {
    this.socialWidget.splice(index, 1);
  }
  deleteCopyRight(index: number) {
    this.copyRight.splice(index, 1);
  }
  deleteContent(index: number) {
    this.copyRightArray.splice(index, 1);
  }
  addContent() {
    const newData: copyRight = {
      data : ''
    };

    this.copyRightArray.push(newData);
  }
}
