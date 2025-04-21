import { Component, OnInit } from '@angular/core';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { routes } from 'src/app/shared/routes/routes';


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

  submitFacility(): void {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQ5NDA4NjR9.0eAVy7Xb88Ke2086jHk8J2htFaxWz4IBVx2VCWF9L-I'; 
  
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
