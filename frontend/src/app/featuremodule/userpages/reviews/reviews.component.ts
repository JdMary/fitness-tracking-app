import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { reviews } from 'src/app/shared/models/reviews.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent {
  public routes = routes;
  public reviewdata: reviews[] = [];
  constructor(private dataservice: DataService) {
    this.reviewdata = this.dataservice.reviewdata;
  }
}
