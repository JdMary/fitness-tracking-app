import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { clientFeedbacks } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  public routes = routes;
  public clientFeedbacks: clientFeedbacks[] = [];
  public testmonialOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    navSpeed: 700,
    nav:true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 2,
      },
    },
  };
  public topproviderOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    navSpeed: 700,
    nav:true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 4,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
      },
    },
  };
  constructor(private data: DataService,private router : Router) {
    this.clientFeedbacks = this.data.clientFeedbacks;
  }
}
