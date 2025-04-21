import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/services/event.service';
import { Event } from 'src/app/shared/models/event.model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css'] // 🔧 Corrigé ici (c'était styleUrl)
})
export class ListEventComponent implements OnInit {

  events: Event[] = [];
  selectedValue = '';
  selectedList = [
    { value: 'A - Z' },
    { value: 'Z - A' },
    { value: 'Date Asc' },
    { value: 'Date Desc' }
  ];
  routes = routes;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data) => this.events = data,
      error: (err) => console.error('❌ Erreur chargement événements', err)
    });
  }

  openDeleteModal(eventId: number): void {
    const confirmDelete = confirm('Êtes-vous sûr de vouloir supprimer cet événement ?');
    if (confirmDelete) {
      this.eventService.deleteEvent(eventId).subscribe({
        next: () => {
          console.log(`✅ Événement avec ID ${eventId} supprimé avec succès.`);
          this.loadEvents();
        },
        error: (err) => {
          console.error('❌ Erreur lors de la suppression :', err);
        }
      });
    }
  }
}
