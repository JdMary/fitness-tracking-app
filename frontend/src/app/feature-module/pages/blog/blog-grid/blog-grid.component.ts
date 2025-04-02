import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { blogGrid } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.css']
})
export class BlogGridComponent {
  public routes = routes;
  public blogGrid : blogGrid[] = []

  constructor(public data:DataService){
    this.blogGrid = this.data.blogGrid
  }
}
