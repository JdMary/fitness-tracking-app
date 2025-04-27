import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/shared/services/event.service';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { Event } from 'src/app/shared/models/event.model';
import { SportFacility } from 'src/app/shared/models/sport-facility.model';
import { routes } from 'src/app/shared/routes/routes';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  event: Event = {
    name: '',
    description: '',
    eventDate: '',
    startTime: '',
    endTime: '',
    price: 0,
    maxParticipation: 0,
    sportFacility: {
      id: 0,
      name: '',
    }
  };

  facilities: SportFacility[] = [];
  routes = routes;

  constructor(
    private eventService: EventService,
    private facilityService: SportFacilityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const eventId = +this.route.snapshot.paramMap.get('id')!;
    this.loadEvent(eventId);
    this.loadFacilities();
  }

  loadEvent(id: number): void {
    this.eventService.getEventById(id).subscribe({
      next: (res) => this.event = res,
      error: (err) => console.error('Erreur chargement event', err)
    });
  }

  loadFacilities(): void {
    this.facilityService.getAllFacilitiesPublic().subscribe({
      next: (data) => this.facilities = data,
      error: (err) => console.error('Erreur chargement facilities', err)
    });
  }

  submitEvent(): void {
    this.eventService.updateEvent(this.event.id!, this.event).subscribe({
      next: () => {
        this.router.navigateByUrl(this.routes.listEvent);
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour', err);
  
        if (err.error && err.error.message) {
          alert('❌ Error: ' + err.error.message);
        } else {
          alert('❌ An unexpected error occurred while updating the event.');
        }
      }
    });
  }
  
}


