import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/services/event.service';
import { Event } from 'src/app/shared/models/event.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data) => this.events = data,
      error: (err) => console.error('Error loading events', err)
    });
  }
  registerToEvent(eventId: number) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you really want to register for this event?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventService.registerToEvent(eventId).subscribe({
          next: (response) => {
            Swal.fire('Success', response.message, 'success');
          },
          error: err => {
            Swal.fire('Error', err.error.message || 'Registration failed', 'error');
          }
        });
      }
    });
  }
  

}
