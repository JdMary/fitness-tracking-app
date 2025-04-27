import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model';
import { EventService } from 'src/app/shared/services/event.service';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Event = {
    name: '',
    description: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    price: 0,
    maxParticipation: 1,
    sportFacility: {
      id: 0,
      name: ''
    }
  };

  facilities: any[] = [];

  constructor(
    private eventService: EventService,
    private facilityService: SportFacilityService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadFacilities();

    this.route.queryParams.subscribe(params => {
      const idFromQuery = params['facilityId'];
      if (idFromQuery) {
        this.event.sportFacility.id = +idFromQuery;
      }
    });
  }

  loadFacilities(): void {
    this.facilityService.getAllFacilitiesPublic().subscribe({
      next: (data) => {
        this.facilities = data;
      },
      error: (err) => {
        console.error('❌ Failed to load facilities', err);
      }
    });
  }

  submitEvent(): void {
    this.eventService.createEvent(this.event).subscribe({
      next: () => {
        alert('✅ Event created successfully!');
        this.resetForm();
        this.router.navigate(['/admin/event/list']);
      },
      error: err => {
        console.error('Error creating event:', err);
        
        if (err.error && err.error.message) {
          alert('❌ Error: ' + err.error.message);
        } else {
          alert('❌ An unexpected error occurred while deleting the subscription.');
        }
      }
    });
  }

  resetForm(): void {
    this.event = {
    
      name: '',
      description: '',
      eventDate: '',
      startTime: '',
      endTime: '',
      price: 0,
      maxParticipation: 1,
      sportFacility: {
        id: 0,
        name: ''
      }
    };
  }
}
