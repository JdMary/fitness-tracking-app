import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrl: './service-request.component.css'
})
export class ServiceRequestComponent {
  public routes = routes
  public selectedValue1 = '';
  public selectedValue2 = '';
  selectedList1: data[] = [
    { value: '0-2 Hrs' },
    { value: '2-3 Hrs' },
    { value: '3-4 Hrs' },
  ];
  selectedList2: data[] = [
    { value: '1st Floor' },
    { value: '2nd Floor' },
    { value: '3rd Floor' },
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
}
