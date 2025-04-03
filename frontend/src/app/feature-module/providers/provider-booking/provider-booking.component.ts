import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { recentBooking } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-booking',
  templateUrl: './provider-booking.component.html',
  styleUrls: ['./provider-booking.component.css']
})
export class ProviderBookingComponent {
  public routes = routes;
  public selectedValue1 = '';
  public recentBookings : recentBooking[] = [];
  
  selectedList1: data[] = [
    {value: 'Select'},
    {value: 'Jeff Fitch'},
    {value: 'Donald Gordon'},
  ];
  public isClassAdded: boolean[] = [false];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  constructor(public data : DataService,private datePipe: DatePipe){
    this.recentBookings = this.data.recentBookings;
  }
  startTime1 = new Date();
  endTime1 = new Date();
  showTimePicker: Array<string> = [];
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
}
