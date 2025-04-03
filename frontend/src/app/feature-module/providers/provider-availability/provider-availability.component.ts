import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-availability',
  templateUrl: './provider-availability.component.html',
  styleUrls: ['./provider-availability.component.css'],
})
export class ProviderAvailabilityComponent {
  showTimePicker: Array<string> = [];

  public hoursArray1 = [0];
  public hoursArray2 = [0];
  public hoursArray3 = [0];
  public hoursArray4 = [0];
  public hoursArray5 = [0];
  public hoursArray6 = [0];
  public hoursArray7 = [0];

  startTime1 = new Date();
  startTime2 = new Date();
  startTime3 = new Date();
  startTime4 = new Date();
  startTime5 = new Date();
  startTime6 = new Date();
  startTime7 = new Date();
  endTime1 = new Date();
  endTime2 = new Date();
  endTime3 = new Date();
  endTime4 = new Date();
  endTime5 = new Date();
  endTime6 = new Date();
  endTime7 = new Date();
 
  constructor(private datePipe: DatePipe) {}


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
}
