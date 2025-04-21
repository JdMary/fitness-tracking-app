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
  routes = routes;
  isCollapsed = false;

  // Filtres
  locations: string[] = [];
  sportTypes: string[] = [];

  selectedLocation: string = '';
  selectedSportType: string = '';
  selectedAvailability: boolean | null = null;

  selectedValue1 = '';
  selectedList1 = [
    { value: 'All Sub Category' },
    { value: 'Fitness' },
    { value: 'Yoga' },
    { value: 'Swimming' }
  ];

  isClassAdded: { [key: number]: boolean } = {};

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
        console.log('Facilities loaded:', this.facilities);
      },
      error: (error) => {
        console.error('Error loading facilities', error);
      }
    });
  }

  loadLocations(): void {
    this.sportFacilityService.getAllLocations().subscribe({
      next: (locations) => {
        this.locations = locations;
        console.log('Locations:', this.locations);
      },
      error: (err) => console.error('Error loading locations', err)
    });
  }

  loadSportTypes(): void {
    this.sportFacilityService.getAllSportTypes().subscribe({
      next: (types) => {
        this.sportTypes = types;
        console.log('Sport types:', this.sportTypes);
      },
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
      next: (res) => this.facilities = res,
      error: (err) => console.error('Error applying filters', err)
    });
  }

  resetFilters(): void {
    this.selectedLocation = '';
    this.selectedSportType = '';
    this.selectedAvailability = null;
    this.applyFilters();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleClass(index: number): void {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  formatLabel(value: number): string {
    return `$${value}`;
  }
}
