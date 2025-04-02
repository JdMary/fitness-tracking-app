import { DatePipe } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.css'
})
export class StaffDetailsComponent {
  public routes = routes
  showTimePicker: Array<string> = [];
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date);
    return this.datePipe.transform(selectedDate, 'h:mm a');
  }
  startTime1 = new Date();
  startTime2 = new Date();
  startTime3 = new Date();
  startTime4 = new Date();
  startTime5 = new Date();
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  endTime1 = new Date();
  endTime3 = new Date();
  endTime4 = new Date();
  selectedList1: data[] = [{ value: 'Select' }, { value: '1 Hr' },{ value: '2 Hr' }];
  selectedList2: data[] = [{ value: 'Select' }, { value: '2' },{ value: '3' }];
  selectedList3: data[] = [{ value: 'Select' }, { value: '15 Mins' },{ value: '30 Mins' }];
  selectedFieldSet: number[] = [0];
  constructor(private renderer: Renderer2,private router:Router,private datePipe: DatePipe){}
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

  navigateToGigs() {
    // Remove the modal backdrop
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      this.renderer.removeChild(backdrop.parentNode, backdrop);
    }

    // Navigate to the specified route
    this.router.navigate(['/providers/staff-list']);
  }

  toggleTimePicker(value: string): void {
    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value;
    } else {
      this.showTimePicker = [];
    }
  }

  progressItems = [
    { label: 'Add Days', icon: 'feather-calendar me-2' },
    { label: 'Breaks', icon: 'ti ti-calendar-filled me-2' },
    { label: 'Unavailable Days', icon: 'ti ti-clock-off me-2' }
  ];

  selectedIndex = 0;

  // This method updates the active index
  onItemSelect(index: number): void {
    this.selectedIndex = index;
  }
}
