import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { howItWorks } from 'src/app/shared/models/how-it-works.model';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css'],
})
export class HowitworksComponent {
  public routes = routes;
  public pricingList: howItWorks[] = [];

  constructor(private Dataservice: DataService) {
    this.pricingList = this.Dataservice.pricingList;
  }
}
