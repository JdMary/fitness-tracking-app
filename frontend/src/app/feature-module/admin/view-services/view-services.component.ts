import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { viewServices } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent {
  public viewServices: viewServices[] = [];
  public routes = routes
  public viewServicesOwl: OwlOptions = {
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
        items: 3,
      },
      768: {
        items: 3,
      },
      1170: {
        items: 3,
      },
    },
  };

  constructor(private data:DataService){
    this.viewServices = this.data.viewServices;
  }
}
