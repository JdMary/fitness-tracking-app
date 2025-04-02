import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css'],
})
export class CustomerBookingComponent {
  public routes = routes;
  public selectedValue = '';
  public selectedValue2 = '';
  public divElement:any;
  selected!: Date | null;
  public selectedFieldSet = [1];

  public isClassAdded: boolean[] = [false];
  constructor( private router:Router, private modalService: NgbModal,private renderer: Renderer2,private el: ElementRef) {}
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  selectedList: data[] = [
    { value: 'Recent' },
    { value: 'Older' },
    { value: 'A to Z' },
    { value: 'Z to A' },
  ];

  selectedList2: data[] = [
    { value: 'Country' },
    { value: 'US' },
    { value: 'Kuwait' },
  ];
  activeTabIndex = 2;
  public cardDetails = false;
  ngOnInit() {
    this.divElement = this.el.nativeElement.querySelector('.fade');
  }
  addCard() {
    this.cardDetails = !this.cardDetails;
  }
  activateTab(index: number) {
    this.activeTabIndex = index;
  }
  navigateTo(res:string) {
    this.router.navigate([res])
    this.renderer.removeClass(this.divElement, 'show');
  }
  isTabActive(index: number) {
    return this.activeTabIndex === index;
  }
}
