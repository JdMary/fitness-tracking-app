import { Component, OnInit } from '@angular/core';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { routes } from 'src/app/shared/routes/routes';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-sport-facility',
  templateUrl: './sport-facility.component.html',
  styleUrls: ['./sport-facility.component.css']
})
export class SportFacilityComponent implements OnInit {
  sportFacility = {
    name: '',
    location: '',
    sportType: '',
    availability: true,
    maxSubscription: 0,
    normalPrice: 0,
    premiumPrice: 0,
    description: ''
  };

  constructor(private sportFacilityService: SportFacilityService) {}

  ngOnInit(): void {}
  selectedFile!: File;

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); // Retrieve token from local storage
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  submitFacility(): void {
    const token = localStorage.getItem('authToken') || ''; // Retrieve token from local storage 
  
    const formData = new FormData();
    formData.append('facility', new Blob([JSON.stringify(this.sportFacility)], { type: 'application/json' }));
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
  
    this.sportFacilityService.createFacility(formData, token).subscribe({
      next: (response) => {
        console.log('✅ Facility created successfully', response);
        alert('Facility created successfully');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating facility', error);
        alert('Error creating facility');
      }
    });
  }
  

  resetForm(): void {
    this.sportFacility = {
      name: '',
      location: '',
      sportType: '',
      availability: true,
      maxSubscription: 0,
      normalPrice: 0,
      premiumPrice: 0,
      description: ''
    };
  }
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }
}
