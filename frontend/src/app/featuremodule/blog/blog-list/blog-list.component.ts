import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { blogList } from 'src/app/shared/models/blog-list.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent {
  public routes = routes;
  public businessBlog: blogList[] = [];
  constructor(private Dataservice: DataService) {
    this.businessBlog = this.Dataservice.businessBlog;
  }
}
