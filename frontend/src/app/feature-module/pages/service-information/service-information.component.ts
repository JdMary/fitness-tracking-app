import { Component,  ElementRef,  OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal,  } from '@ng-bootstrap/ng-bootstrap';
interface hoursData {
  data: string;
}
interface data {
  value: string;
}
@Component({
  selector: 'app-service-information',
  templateUrl: './service-information.component.html',
  styleUrls: ['./service-information.component.css'],
})
export class ServiceInformationComponent implements OnInit, OnDestroy {
  public selectedFieldSet = [0];
  successModalVisible = true;
  public selectedValue1 = '';
  public selectedValue2 = '';

  public routes = routes;
  public chargesArray: hoursData[] = [];
  public serviceArray: hoursData[] = [];
  showTimePicker: Array<string> = [];
  public tabPane = false;
  public hoursArray1 = [];
  public hoursArray2 = [];
  public hoursArray3 = [];
  public hoursArray4 = [];
  public hoursArray5 = [];
  public hoursArray6 = [];
  public hoursArray7 = [];
  public hoursArray8 = [];

  startTime1 = new Date();
  startTime2 = new Date();
  startTime3 = new Date();
  startTime4 = new Date();
  startTime5 = new Date();
  startTime6 = new Date();
  startTime7 = new Date();
  startTime8 = new Date();
  endTime1 = new Date();
  endTime2 = new Date();
  endTime3 = new Date();
  endTime4 = new Date();
  endTime5 = new Date();
  endTime6 = new Date();
  endTime7 = new Date();
  endTime8 = new Date();

  constructor(private datePipe: DatePipe, private router:Router, private modalService: NgbModal,private renderer: Renderer2,private el: ElementRef) {}
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }

  public tabConfig = {
    timeSlot: true,
    timePicker: false,
  };

  addHours(array: number[]) {
    array.push(1);
  }
  deleteHours(array: number[], index: number) {
    array.splice(index, 1);
  }
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl('', Validators.required()),
  });

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
  deleteCharges(index: number) {
    this.chargesArray.splice(index, 1);
  }
  deleteService(index: number) {
    this.serviceArray.splice(index, 1);
  }
  addCharges() {
    const newData: hoursData = {
      data: '',
    };

    this.chargesArray.push(newData);
  }
  addService() {
    const newData: hoursData = {
      data: '',
    };

    this.serviceArray.push(newData);
  }
  
  selectedList1: data[] = [
    { value: 'Select Category' },
    { value: 'Car wash' },
    { value: 'House Cleaning' },
  ];
  selectedList2: data[] = [
    { value: 'Select Sub Category' },
    { value: 'House Cleaning' },
    { value: 'Car wash' },
  ];
  public hideClass: boolean[] = [true];
  deleteItem(index: number) {
    this.hideClass[index] = !this.hideClass[index];
  }
  @ViewChild('successModal', { static: false }) successModal!: NgbModal;
  goToDashboard() {
    this.modalService.dismissAll(); 
    this.successModalVisible = !this.successModalVisible
    this.router.navigate([routes.providerServices])
  }
  isHidden = false; 

 
  avatars = [
    { img: 'assets/img/gallery/gallery-01.jpg', isHidden: false },
    { img: 'assets/img/gallery/gallery-02.jpg', isHidden: false },
    { img: 'assets/img/gallery/gallery-03.jpg', isHidden: false },
    { img: 'assets/img/gallery/gallery-04.jpg', isHidden: false },
    { img: 'assets/img/gallery/gallery-05.jpg', isHidden: false }
  ];

  hideAvatar(index: number): void {
    this.avatars[index].isHidden = true; // Set the specific avatar's isHidden property to true
  }
  isAvatarHidden = false; 
  hiddenAvatar(): void {
    this.isAvatarHidden = true; // Hide the avatar when the trash icon is clicked
  }
  selectedOption5: any;
  removeOption5(user: any) {
    const index = this.selectedOption5.indexOf(user);
    if (index !== -1) {
      this.selectedOption5.splice(index, 1);
    }
  }
  option5 = [
    {
      id: 1,
      name: 'Darlee Robertson',
      image: 'assets/img/profiles/avatar-01.jpg',
    },
    { id: 2, name: 'Sharon Roy', image: 'assets/img/profiles/avatar-02.jpg' },
    { id: 3, name: 'Vaughan', image: 'assets/img/profiles/avatar-03.jpg' },
    { id: 4, name: 'Jessica', image: 'assets/img/profiles/avatar-04.jpg' },
    { id: 5, name: 'Carol Thomas', image: 'assets/img/profiles/avatar-05.jpg' },
  ];
  @ViewChild('backToGigsBtn', { static: true }) backToGigsBtn: any;

 

  navigateToGigs() {
    // Remove the modal backdrop
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      this.renderer.removeChild(backdrop.parentNode, backdrop);
    }

    // Navigate to the specified route
    this.router.navigate(['/services/service-details']);
  }
}
