import { Component, OnInit } from '@angular/core';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-list-sport-facility',
  templateUrl: './list-sport-facility.component.html',
  styleUrls: ['./list-sport-facility.component.css']
})
export class ListSportFacilityComponent implements OnInit {
  
  facilities: any[] = []; 
  selectedValue = '';
  selectedList = [
    { value: 'A - Z' },
    { value: 'Z - A' },
    { value: 'Recently Added' }
  ];

  routes = routes; 

  constructor(private sportFacilityService: SportFacilityService) {}

  ngOnInit(): void {
    this.fetchFacilities();
  }

  fetchFacilities(): void {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQyNzkyOTl9.2BpGPYAL-NLlykkI-Yu8Nt2EkNL8UdPSeiRwVVXuOmw'; 

    this.sportFacilityService.getAllFacilities(token).subscribe({
      next: (response) => {
        this.facilities = response;
        console.log('Facilities loaded:', this.facilities);
      },
      error: (error) => {
        console.error(' Error loading facilities', error);
      }
    });
  }
  openDeleteModal(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this facility?');
    if (confirmDelete) {
      const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQyNzkyOTl9.2BpGPYAL-NLlykkI-Yu8Nt2EkNL8UdPSeiRwVVXuOmw'; 
      this.sportFacilityService.deleteFacility(id, token).subscribe({
        next: () => {
          alert('Facility deleted successfully ');
          this.fetchFacilities(); 
        },
        error: (error) => {
          console.error('Error deleting facility', error);
          alert('Error deleting facility ');
        }
      });
    }
  }
  
}
