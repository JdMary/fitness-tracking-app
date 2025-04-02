/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { listSidebarList } from 'src/app/shared/models/listing-grid-sidebar.model';

@Component({
  selector: 'app-listing-grid-sidebar',
  templateUrl: './listing-grid-sidebar.component.html',
  styleUrls: ['./listing-grid-sidebar.component.css'],
})
export class ListingGridSidebarComponent {
  public routes = routes;
  public listsidebar: listSidebarList[] = [];
  public categories: any = [];
  categoriesDataSource = new MatTableDataSource();
  searchInputCategory: any;
  selectedCategory: any = '';

  slidevalue = 55;
  options: Options = {
    floor: 0,
    ceil: 100,
  };

  constructor(private Dataservice: DataService) {
    this.listsidebar = this.Dataservice.listsidebarList;
    this.categories = this.Dataservice.categoriesList;
    this.categoriesDataSource = new MatTableDataSource(this.categories);
  }
  searchCategory(value: any): void {
    const filterValue = value;
    this.categoriesDataSource.filter = filterValue.trim().toLowerCase();
    this.categories = this.categoriesDataSource.filteredData;
  }
}
