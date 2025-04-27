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
  displayedFacilities: any[] = [];
  currentPage: number = 1;
  pageSize: number = 1;
  totalData: number = 0;
  pageNumberArray: number[] = [];
  serialNumberArray: number[] = [];

  selectedValue = '';
  selectedList = [
    { value: 'A - Z' },
    { value: 'Z - A' }
  ];

  routes = routes; 

  constructor(private sportFacilityService: SportFacilityService) {}

  ngOnInit(): void {
    this.fetchFacilities();
  }

  fetchFacilities(): void {
    this.sportFacilityService.getAllFacilitiesPublic().subscribe({
      next: (response) => {
        this.facilities = response;
        this.totalData = this.facilities.length;
        this.updateDisplayedFacilities();
      },
      error: (error) => {
        console.error('Error loading facilities', error);
      }
    });
  }

  PageSize(): void {
    this.currentPage = 1;
    this.sortFacilities();
  }

  moveToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedFacilities();
  }

  updateDisplayedFacilities(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedFacilities = this.facilities.slice(start, end);
    this.pageNumberArray = Array.from({ length: Math.ceil(this.totalData / this.pageSize) }, (_, i) => i + 1);
    this.serialNumberArray = this.displayedFacilities.map((_, i) => start + i + 1);
  }

  openDeleteModal(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this facility?');
    if (confirmDelete) {
      const token = localStorage.getItem('authToken') || '';
      this.sportFacilityService.deleteFacility(id, token).subscribe({
        next: () => {
          alert('Facility deleted successfully');
          if (this.displayedFacilities.length === 1 && this.currentPage > 1) {
            this.currentPage--;
          }
          this.fetchFacilities();
        },
        error: (error) => {
          console.error('Error deleting facility', error);
          if (error.error && error.error.message) {
            alert('❌ Error: ' + error.error.message);
          } else {
            alert('❌ An unexpected error occurred while deleting facility.');
          }
        }
      });
    }
  }
  sortFacilities(): void {
    if (this.selectedValue === 'A - Z') {
      this.facilities.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedValue === 'Z - A') {
      this.facilities.sort((a, b) => b.name.localeCompare(a.name));
    }
  
    this.currentPage = 1;
    this.updateDisplayedFacilities();
  }
  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const keyword = input?.value.trim();
  
    if (keyword) {
      this.sportFacilityService.searchFacilities(keyword).subscribe(res => {
        this.facilities = res;
        this.totalData = res.length;
        this.currentPage = 1;
        this.updateDisplayedFacilities(); 
      });
    } else {
      this.fetchFacilities(); 
    }
  }
  
  
  
}
