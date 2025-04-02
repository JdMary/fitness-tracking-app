import { Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}

@Component({
  selector: 'app-book-service',
  templateUrl: './book-service.component.html',
  styleUrls: ['./book-service.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookServiceComponent {
  public selectedValue = '';
  public selectedValue2 = '';
  public routes = routes;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public divElement:any;
  selected!: Date | null;
  public selectedFieldSet = [1];
  selectedList: data[] = [
    {value: 'Recent'},
    {value: 'Older'},
    {value: 'A to Z'},
    {value: 'Z to A'},
  ];

  selectedList2: data[] = [
    {value: 'Country'},
    {value: 'US'},
    {value: 'Kuwait'},
  ];
  activeTabIndex = 2;
  public cardDetails = false;

  addCard() {
    this.cardDetails = !this.cardDetails;
  }
  activateTab(index: number) {
    this.activeTabIndex = index;
  }
  
  isTabActive(index: number) {
    return this.activeTabIndex === index;
  }
  @ViewChild('reshchedule-modal') rescheduleModal: unknown;
  @ViewChild('successModal') successModal: unknown;
  private rescheduleModalRef!: NgbModalRef;
  private successModalRef!: NgbModalRef;
  successModalVisible = false;
  isServiceModalFade = true;
  constructor(private modalService: NgbModal,private renderer: Renderer2,private el: ElementRef) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.rescheduleModalRef = this.modalService.open(this.rescheduleModal, { backdrop: 'static' });
    this.divElement = this.el.nativeElement.querySelector('.fade');
  }

  openSuccessModal() {
    this.modalService.dismissAll(); 
    this.successModalRef = this.modalService.open(this.successModal);
    this.successModalVisible = true;
    this.isServiceModalFade = false;
    if (this.rescheduleModalRef) {
      this.rescheduleModalRef.dismiss();
    }
  }
  removeBackdrop(){
    this.renderer.removeClass(this.divElement, 'show');
    this.rescheduleModalRef.dismiss();
  }
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {
    this.successModalRef.dismiss();
  }
  

}
