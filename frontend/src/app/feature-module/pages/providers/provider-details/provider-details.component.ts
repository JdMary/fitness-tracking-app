import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent {
  public routes = routes;
  public isCollapsed = false;
  toggleCollapse() {
    if(this.isCollapsed == true){
      this.isCollapsed = false;
    }
    else{
      this.isCollapsed = true
    }
  }
  public viewServicesOwl: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    navSpeed: 700,
    nav:false,

    responsive: {
      0: {
        items: 3,
      },
      768: {
        items: 6,
      },
      1000: {
        items: 6,
      },
      1170: {
        items: 6,
      },
    },
  };
  public viewServicesOwl2: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    navSpeed: 2000,
    smartSpeed: 2000,
    nav:true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
				items: 1
			},
			550: {
				items: 1
			},
			768: {
				items: 3
			},
			1200: {
				items: 3
			},
			1400: {
				items: 3
			}
    },
  };
  public viewServicesOwl3: OwlOptions = {
    margin: 24,
    loop: true,
    dots: false,
    navSpeed: 2000,
    smartSpeed: 2000,
    nav:true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
				items: 1
			},
			550: {
				items: 2
			},
			768: {
				items: 4
			},
			1200: {
				items: 4
			},
			1400: {
				items: 4
			}
    },
  };
}
