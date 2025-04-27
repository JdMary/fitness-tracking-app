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
  paginatedFacilities: any[] = [];
  routes = routes;

  currentPage: number = 1;
  pageSize: number = 1;
  totalPages: number = 0;

  locations: string[] = [];
  sportTypes: string[] = [];

  selectedLocation: string = '';
  selectedSportType: string = '';
  selectedAvailability: boolean | null = null;

  constructor(private sportFacilityService: SportFacilityService) {}

  ngOnInit(): void {
    this.fetchFacilities();
    this.loadLocations();
    this.loadSportTypes();
  }

  fetchFacilities(): void {
    this.sportFacilityService.getAllFacilitiesPublic().subscribe({
      next: (response) => {
        this.facilities = response;
        this.updatePaginatedFacilities();
      },
      error: (error) => {
        console.error('Error loading facilities', error);
      }
    });
  }

  loadLocations(): void {
    this.sportFacilityService.getAllLocations().subscribe({
      next: (locations) => (this.locations = locations),
      error: (err) => console.error('Error loading locations', err)
    });
  }

  loadSportTypes(): void {
    this.sportFacilityService.getAllSportTypes().subscribe({
      next: (types) => (this.sportTypes = types),
      error: (err) => console.error('Error loading sport types', err)
    });
  }

  applyFilters(): void {
    const filters = {
      location: this.selectedLocation || undefined,
      sportType: this.selectedSportType || undefined,
      availability: this.selectedAvailability !== null ? this.selectedAvailability : undefined
    };

    this.sportFacilityService.getFilteredFacilities(filters).subscribe({
      next: (res) => {
        this.facilities = res;
        this.currentPage = 1;
        this.updatePaginatedFacilities();
      },
      error: (err) => console.error('Error applying filters', err)
    });
  }

  resetFilters(): void {
    this.selectedLocation = '';
    this.selectedSportType = '';
    this.selectedAvailability = null;
    this.fetchFacilities();
  }

  updatePaginatedFacilities(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedFacilities = this.facilities.slice(start, end);
    this.totalPages = Math.ceil(this.facilities.length / this.pageSize);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedFacilities();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedFacilities();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedFacilities();
  }
}
