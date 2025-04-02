import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { blogSidebarList } from 'src/app/shared/models/blog-list-sidebar.model';

@Component({
  selector: 'app-blog-list-sidebar',
  templateUrl: './blog-list-sidebar.component.html',
  styleUrls: ['./blog-list-sidebar.component.css'],
})
export class BlogListSidebarComponent {
  public routes = routes;
  public blogsidebarlist: blogSidebarList[] = [];
  constructor(private Dataservice: DataService) {
    this.blogsidebarlist = this.Dataservice.blogsidebarlist;
  }
}
