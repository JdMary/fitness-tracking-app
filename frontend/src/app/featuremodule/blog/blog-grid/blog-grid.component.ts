import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { blogGrid } from 'src/app/shared/models/blog-grid.model';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css'],
})
export class BlogGridComponent {
  public routes = routes;
  public bloggrid: blogGrid[] = [];
  constructor(private DataService: DataService) {
    this.bloggrid = this.DataService.bloggridList;
  }
}
