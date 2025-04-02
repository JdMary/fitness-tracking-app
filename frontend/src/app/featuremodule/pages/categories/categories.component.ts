import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { categories } from 'src/app/shared/models/categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  public routes = routes;
  public listingcategory: categories[] = [];
  constructor(private DataService: DataService) {
    this.listingcategory = this.DataService.listingcategory;
  }
}
