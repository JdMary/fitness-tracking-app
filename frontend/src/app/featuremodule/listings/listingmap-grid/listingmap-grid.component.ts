import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { listingMapGrid } from 'src/app/shared/models/listing-map-grid.model';

@Component({
  selector: 'app-listingmap-grid',
  templateUrl: './listingmap-grid.component.html',
  styleUrls: ['./listingmap-grid.component.css'],
})
export class ListingmapGridComponent {
  public routes = routes;
  public mapgrid: listingMapGrid[] = [];
  constructor(private Dataservice: DataService) {
    this.mapgrid = this.Dataservice.mapgridList;
  }
}
