import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/service/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import {
  business,
  destination,
  feedback,
  guideRecommandedData,
  lifestyle,
  recommendedBlog,
  restaurantData,
  restaurants,
  shops,
  tripBlog,
  tripData,
} from 'src/app/shared/models/home3.model';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css'],
})
export class Home3Component implements OnInit {
  public routes = routes;
  public destination: destination[] = [];
  public recommendedBlog: recommendedBlog[] = [];
  public tripdata: tripData[] = [];
  public feedbackdata: feedback[] = [];
  public tripblog: tripBlog[] = [];
  public guiderecommandeddata: guideRecommandedData[] = [];
  public restaurants: restaurants[] = [];
  public shop: shops[] = [];
  public business: business[] = [];
  public lifestyle: lifestyle[] = [];
  public restauranttripdata: restaurantData[] = [];

  public activeTab: Array<string> = ['hotels'];

  constructor(private Dataservice: DataService, public router: Router) {
    this.destination = this.Dataservice.destination;
    this.recommendedBlog = this.Dataservice.recommendedBlog;
    this.tripdata = this.Dataservice.tripdata;
    this.feedbackdata = this.Dataservice.feedback;
    this.tripblog = this.Dataservice.tripblog;
    this.guiderecommandeddata = this.Dataservice.guiderecommandeddata;
    this.restaurants = this.Dataservice.restaurants;
    this.shop = this.Dataservice.shops;
    this.business = this.Dataservice.business;
    this.lifestyle = this.Dataservice.lifestyle;
    this.restauranttripdata = this.Dataservice.restauranttripdata;
  }
  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
  }

  public destinationOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  public recommendedBlogOwlOptions: OwlOptions = {
    items: 4,

    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  public tripdataOwlOptions: OwlOptions = {
    items: 4,
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  public restauranttripdataOwlOptions: OwlOptions = {
    items: 4,
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  public feedbackdataOwlOptions: OwlOptions = {
    items: 3,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
        loop: true,
      },
      1024: {
        items: 3,
        loop: true,
      },
    },
  };
  public tripblogOwlOptions: OwlOptions = {
    items: 3,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
        loop: true,
      },
      1024: {
        items: 3,
        loop: true,
      },
    },
  };
  public guiderecommandedOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        loop: true,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  public restaurantsOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        loop: true,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  public shopOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  public businessOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  public lifestyleOwlOptions: OwlOptions = {
    items: 4,
    margin: 24,
    nav: false,
    dots: true,
    rtl: false,

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 4,
        loop: true,
      },
      1024: {
        items: 4,
        loop: true,
      },
    },
  };
  path() {
    this.router.navigate([routes.listinggridsidebar]);
  }
}
