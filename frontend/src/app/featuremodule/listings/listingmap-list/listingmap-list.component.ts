import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { listingMapList } from 'src/app/shared/models/listing-map-list.model';

@Component({
  selector: 'app-listingmap-list',
  templateUrl: './listingmap-list.component.html',
  styleUrls: ['./listingmap-list.component.css'],
})
export class ListingmapListComponent {
  public routes = routes;
  public mapList: listingMapList[] = [];

  constructor(private Dataservice: DataService) {
    this.mapList = this.Dataservice.mapList;
  }
}
