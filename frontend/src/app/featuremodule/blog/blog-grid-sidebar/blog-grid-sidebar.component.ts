import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { gridBlog } from 'src/app/shared/models/blog-grid-sidebar.model';

@Component({
  selector: 'app-blog-grid-sidebar',
  templateUrl: './blog-grid-sidebar.component.html',
  styleUrls: ['./blog-grid-sidebar.component.css'],
})
export class BlogGridSidebarComponent {
  public routes = routes;
  public gridBlog: gridBlog[] = [];
  constructor(private Dataservice: DataService) {
    this.gridBlog = this.Dataservice.gridBlog;
  }
}
