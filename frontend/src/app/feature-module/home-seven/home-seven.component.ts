import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { additionalService, customersReview, latestBlogs, mechanics, partners, service } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-home-seven',
  templateUrl: './home-seven.component.html',
  styleUrls: ['./home-seven.component.css']
})
export class HomeSevenComponent implements OnInit{
  
  public service: service[] = [];
  public mechanics: mechanics[] = [];
  public customersReview: customersReview[] = [];
  public additionalService: additionalService[] = [];
  public latestBlogs: latestBlogs[] = [];
  public partners: partners[] = [];
  public routes = routes;
  public strokeValue = 0;
  public progress = 0;
  public serviceOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    navSpeed: 700,
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
  public mechanicsOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    nav:false,
    navSpeed: 700,
    navText: [
      "<i class='feather icon-arrow-left'></i>",
      "<i class='feather icon-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
      },
    },
  };
  public customersReviewOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: true,
    nav:false,
    
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };
  public additionalServiceOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='feather icon-arrow-left'></i>",
      "<i class='feather icon-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 4,
      },
      1170: {
        items: 4,
      },
    },
  };
  public latestBlogsOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    navSpeed: 700,
    navText: [
      "<i class='feather icon-arrow-left'></i>",
      "<i class='feather icon-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };
  public partnersOwl: OwlOptions = {
    margin: 24,
    nav: false,
    loop: true,
    dots:false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 5,
      },
      1170: {
        items: 5,
      },
    },
  };
  constructor(private data : DataService){
    this.service = this.data.service;
    this.mechanics = this.data.mechanics;
    this.customersReview = this.data.customersReview;
    this.additionalService = this.data.additionalService;
    this.latestBlogs = this.data.latestBlogs;
    this.partners = this.data.partners;
  }
  ngOnInit(): void {
    this.calculateScrollPercentage();
  }
  // scroll the page to top position
  public scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  // function to calculate the scroll progress
  private calculateScrollPercentage(): void {
    window.addEventListener('scroll', () => {
      const body = document.body,
        html = document.documentElement;
      //gets the total height of page till scroll
      const totalheight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      // calculates the total stroke value
      this.progress = totalheight;
      const currentDistance = window.scrollY / (totalheight / 3000);
      // calculates the current stroke value
      this.strokeValue = totalheight - currentDistance / 8;
      // condition to hide scroll progress if page in top
      if (window.scrollY == 0) {
        this.strokeValue = totalheight;
      }
      // condition to make scroll progress to 100 if page in bottom
      if (window.innerHeight + window.scrollY >= totalheight) {
        this.strokeValue = 0;
      }
    });
  }
  
}
