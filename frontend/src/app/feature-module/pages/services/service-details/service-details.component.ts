/* eslint-disable @typescript-eslint/no-explicit-any */
import { AfterViewChecked, Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { routes } from 'src/app/shared/routes/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements AfterViewChecked {
  public routes = routes;
  public amazingworklightbox:any =[];
  public albums: any = [];
  public albumsOne: any = [];
  public albumsTwo: any = [];
  public viewServices: any = [];
  private lightGallery!: LightGallery;
  private needRefresh = false;
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  public isCollapsed = false;
  toggleCollapse() {
    if(this.isCollapsed == true){
      this.isCollapsed = false;
    }
    else{
      this.isCollapsed = true
    }
  }
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };
  public viewServicesOwl: OwlOptions = {
    margin: 16,
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
    navSpeed: 700,
    nav:true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 2,
      },
    },
  };
  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav-thumbnails',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.service-carousel',
    dots: false,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  constructor(private data:DataService,private _lightbox: Lightbox){
    this.viewServices = this.data.viewServices;
    for (let i = 1; i <= 5; i++) {
      const src = 'assets/img/services/service-slider-0' + i + '.jpg';
      this.albumsOne.push({ src: src });
    }
    for (let i = 2; i <= 3; i++) {
      const src = 'assets/img/services/service-slider-0' + i + '.jpg';
      this.albums.push({ src: src });

    }
    for (let i = 1; i <= 3; i++) {
      const src = 'assets/img/services/service-slider-0'+ i + '.jpg';

      this.albumsTwo.push({ src: src });
    }


  }
  open(index: number, albumArray: Array<any>): void {
    this._lightbox.open(albumArray, index);
  }
  close(): void {
    this._lightbox.close();
  }
  openAll(): void {
    this._lightbox.open(this.albumsTwo );
  }

}
