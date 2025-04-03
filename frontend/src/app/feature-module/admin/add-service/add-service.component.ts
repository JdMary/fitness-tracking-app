import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { FormControl, FormGroup } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';
import { DatePipe } from '@angular/common';
interface ServiceData {
  data : string
}
interface data {
  value : string
  
}
interface hoursData {
  data: string;
}

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css'],
})
export class AddServiceComponent implements OnInit, OnDestroy {
  public selectedValue = '';
  public chargesArray: hoursData[] = [];
  public selectedFieldSet = [0];
  showTimePicker: Array<string> = [];
  editor!: Editor;
  public datasArray: ServiceData[] = [];
  showFieldset = true;
  public tabPane = false;
  public hoursArray1 = [0];
  public hoursArray2 = [0];
  public hoursArray3 = [0];
  public hoursArray4 = [0];
  public hoursArray5 = [0];
  public hoursArray6 = [0];
  public hoursArray7 = [0];
  public hoursArray8 = [0];
  startTime1 = new Date();
  startTime2 = new Date();
  startTime3 = new Date();
  startTime4 = new Date();
  startTime5 = new Date();
  startTime6 = new Date();
  startTime7 = new Date();
  startTime8 = new Date();
  startTime9 = new Date();
  startTime10 = new Date();
  startTime11 = new Date();
  startTime12 = new Date();
  startTime13 = new Date();
  startTime14 = new Date();
  startTime15 = new Date();
  startTime16 = new Date();
  endTime1 = new Date();
  endTime2 = new Date();
  endTime3 = new Date();
  endTime4 = new Date();
  endTime5 = new Date();
  endTime6 = new Date();
  endTime7 = new Date();
  endTime8 = new Date();
  endTime9 = new Date();
  endTime10 = new Date();
  endTime11 = new Date();
  endTime12 = new Date();
  endTime13 = new Date();
  endTime14 = new Date();
  endTime15 = new Date();
  endTime16 = new Date();
  public tabConfig = {
    timeSlot: true,
    timePicker: false,
  };

  addHours1() {
    this.hoursArray1.push(1);
  }
  deleteHours1(index: number) {
    this.hoursArray1.splice(index, 1);
  }
  addHours2() {
    this.hoursArray2.push(1);
  }
  deleteHours2(index: number) {
    this.hoursArray2.splice(index, 1);
  }
  addHours3() {
    this.hoursArray3.push(1);
  }
  deleteHours3(index: number) {
    this.hoursArray3.splice(index, 1);
  }
  addHours4() {
    this.hoursArray4.push(1);
  }
  deleteHours4(index: number) {
    this.hoursArray4.splice(index, 1);
  }
  addHours5() {
    this.hoursArray5.push(1);
  }
  deleteHours5(index: number) {
    this.hoursArray5.splice(index, 1);
  }
  addHours6() {
    this.hoursArray6.push(1);
  }
  deleteHours6(index: number) {
    this.hoursArray6.splice(index, 1);
  }
  addHours7() {
    this.hoursArray7.push(1);
  }
  deleteHours7(index: number) {
    this.hoursArray7.splice(index, 1);
  }
  addHours8() {
    this.hoursArray8.push(1);
  }
  deleteHours8(index: number) {
    this.hoursArray8.splice(index, 1);
  }
  public tabChanged(activeTab: string): void {
    this.tabConfig.timeSlot = activeTab === 'timeSlot';
    this.tabConfig.timePicker = activeTab !== 'timeSlot';
  }

  constructor(private datePipe: DatePipe) {}
  toggleTimePcker(value: string): void {
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
  addCharges() {
    const newData: hoursData = {
      data: '',
    };

    this.chargesArray.push(newData);
  }
  

  public routes = routes;
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
  deleteData(index: number) {
    this.datasArray.splice(index, 1);
  }
  addData() {
    const newData: ServiceData = {
      data : ''
    };

    this.datasArray.push(newData);
  }
  selectedList: data[] = [
    {value: 'Select Provider'},
    {value: 'Johnny'},
    {value: 'James'},
   
];
selectedList1: data[] = [
  {value: 'Select Category'},
  {value: 'Car Wash'},
  {value: 'House Cleaning'},
 
];
selectedList2: data[] = [
  {value: 'Select Subcategory'},
  {value: 'Car Repair'},
  {value: 'Plumbing'},
 
];
public images = [
  { src: 'assets/img/services/service-01.jpg', alt: 'Service Image' },
  { src: 'assets/img/services/service-02.jpg', alt: 'Service' },
  { src: 'assets/img/services/service-03.jpg', alt: 'Service Image' },
  { src: 'assets/img/services/service-04.jpg', alt: 'image' }
];
deleteImage(index: number) {
  this.images.splice(index, 1);
}
deleteCharges(index: number) {
  this.chargesArray.splice(index, 1);
}
currentStep = 0;

nextStep() {
  this.currentStep++;
}

prevStep() {
  this.currentStep--;
}
addHours(array: number[]) {
  array.push(1);
}
deleteHours(array: number[], index: number) {
  array.splice(index, 1);
}
public hideClass: boolean[] = [true];
  deleteItem(index: number) {
    this.hideClass[index] = !this.hideClass[index];
  }
  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }

}
