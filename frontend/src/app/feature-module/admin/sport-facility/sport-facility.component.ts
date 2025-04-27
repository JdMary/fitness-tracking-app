import { Component, OnInit } from '@angular/core';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { routes } from 'src/app/shared/routes/routes';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(
     private route: ActivatedRoute,
        private router: Router,private sportFacilityService: SportFacilityService) {}

  ngOnInit(): void {}
  selectedFile!: File;

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken'); 
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  submitFacility(): void {
    const token = localStorage.getItem('authToken') || ''; 
  
    const formData = new FormData();
    formData.append('facility', new Blob([JSON.stringify(this.sportFacility)], { type: 'application/json' }));
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
  
    this.sportFacilityService.createFacility(formData, token).subscribe({
      next: (response) => {
        console.log('Facility created successfully', response);
        alert('Facility created successfully');
        this.router.navigate(['/admin/list-sport-facility']);
      },
      error: (error) => {
        console.error('Error creating facility', error);
        
        if (error.error && error.error.message) {
          alert('❌ Error: ' + error.error.message);
        } else {
          alert('❌ An unexpected error occurred while creating the facility.');
        }
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
