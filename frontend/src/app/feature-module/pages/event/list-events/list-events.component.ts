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
      error: (err) => console.error('Erreur de chargement des événements', err)
    });
  }
  registerToEvent(eventId: number) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Souhaitez-vous vraiment vous inscrire à cet événement ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventService.registerToEvent(eventId).subscribe({
          next: () => Swal.fire('Succès', 'Vous êtes bien inscrit ! 🎉', 'success'),
          error: err => Swal.fire('Erreur', err.error.message || 'Échec de l\'inscription', 'error')
        });
      }
    });
  }

}
