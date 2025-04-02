import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  public routes = routes;
  selected!: Date | null;
  
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';

  selectedList1: data[] = [
    {value: 'Select City'},
    {value: 'Tornoto'},
    {value: 'Texas'},
  ];
  selectedList2: data[] = [
    {value: 'Select State'},
    {value: 'Tornoto'},
    {value: 'Texas'},
  ];
  selectedList3: data[] = [
    {value: 'Select Country'},
    {value: 'US'},
    {value: 'UK'},
  ];
  currentStep = 0;
  selectedFieldSet: number[] = [0];
  nextStep() {
    if (this.selectedFieldSet[0] < 13) {
      this.selectedFieldSet[0]++;
     
    }
    
  }
  previousStep() {
    if (this.selectedFieldSet[0] > 0) {
      // Move to the previous step
      this.selectedFieldSet[0]--;
      
     
    }
  }
  selectedPayment: string = '';  // This will store the selected payment method

  selectPayment(payment: string): void {
    this.selectedPayment = payment;  // Set the selected payment method
  }
  selectedCardIndex: number | null = null;
  cards = [
    { image: 'assets/img/icons/service-01.svg', title: 'Lighting Services - California Shop', address: '1052 Edsel Road LA', staffs: 12, rating: 5.0 },
    { image: 'assets/img/icons/service-02.svg', title: 'Lighting Services - California Shop', address: '1052 Edsel Road LA', staffs: 15, rating: 4.9 },
    { image: 'assets/img/icons/service-03.svg', title: 'Lighting Services - Texas Shop', address: '1214 Rich land Avenue', staffs: 16, rating: 4.0 },
    { image: 'assets/img/icons/service-04.svg', title: 'Lighting Services - New York Shop', address: '4127 Small Street', staffs: 16, rating: 4.5 },
    { image: 'assets/img/icons/service-05.svg', title: 'Lighting Services - New Jersey Shop', address: '3527 Saint James Drive', staffs: 21, rating: 4.5 }
  ];
  selectCard(index: number): void {
    this.selectedCardIndex = index;
  }
  selectedStaffIndex: number | null = null;
  staffList = [
    { image: 'assets/img/profiles/avatar-01.jpg', name: 'Jeff Fitch', email: 'fithch467@example.com', services: 8, rating: 4.9 },
    { image: 'assets/img/profiles/avatar-17.jpg', name: 'Jacob Kline', email: 'jk235@example.com', services: 7, rating: 4.8 },
    { image: 'assets/img/profiles/avatar-25.jpg', name: 'Patricia Durham', email: 'parcet56@example.com', services: 6, rating: 4.0 },
    { image: 'assets/img/profiles/avatar-14.jpg', name: 'David Kauffman', email: 'davidew54@example.com', services: 5, rating: 4.5 },
    { image: 'assets/img/profiles/avatar-26.jpg', name: 'Kara Coble', email: 'karade345@example.com', services: 2, rating: 4.5 },
    { image: 'assets/img/profiles/avatar-26.jpg', name: 'Marcela Garcia', email: 'marc346@example.com', services: 4, rating: 4.8 },
    { image: 'assets/img/profiles/avatar-22.jpg', name: 'Bill Andrus', email: 'bild3567@example.com', services: 4, rating: 4.7 },
    { image: 'assets/img/profiles/avatar-04.jpg', name: 'Travis Machado', email: 'trc367@example.com', services: 6, rating: 4.0 },
    { image: 'assets/img/profiles/avatar-24.jpg', name: 'Darrell Dolezal', email: 'darv456@example.com', services: 2, rating: 4.5 }
  ];

  selectStaff(index: number): void {
    this.selectedStaffIndex = index;
  }
  selectedIndex: number | null = null;
  times = [
    { time: '07:00 - 07:30', slots: 2, disabled: true },
    { time: '07:30 - 08:00', slots: 4, disabled: true },
    { time: '08:00 - 08:30', slots: 2, disabled: true },
    { time: '08:30 - 09:00', slots: 3, disabled: true },
    { time: '09:00 - 09:30', slots: 2, disabled: false },
    { time: '09:30 - 10:00', slots: 5, disabled: false },
    { time: '10:00 - 10:30', slots: 3, disabled: false },
    { time: '10:30 - 11:00', slots: 2, disabled: false },
    { time: '11:00 - 11:30', slots: 2, disabled: false },
    { time: '11:30 - 12:00', slots: 5, disabled: false },
    { time: '12:00 - 12:30', slots: 4, disabled: false },
    { time: '12:30 - 13:00', slots: 6, disabled: false },
    { time: '13:00 - 13:30', slots: 2, disabled: false },
    { time: '13:30 - 14:00', slots: 2, disabled: false },
    { time: '14:30 - 15:00', slots: 2, disabled: false },
    { time: '15:30 - 16:00', slots: 2, disabled: false },
    { time: '16:30 - 17:00', slots: 2, disabled: false },
    { time: '16:30 - 17:30', slots: 2, disabled: false },
   
  ];

  // Method to set selected index
  selectTime(index: number): void {
    if (!this.times[index].disabled) {
      this.selectedIndex = index;
    }
  }
 
}
