import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { bookmarks } from 'src/app/shared/models/bookmarks.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent {
  public routes = routes;
  public Bookmarksdata: bookmarks[] = [];

  constructor(private dataservice: DataService) {
    this.Bookmarksdata = this.dataservice.Bookmarksdata;
  }
}
