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
