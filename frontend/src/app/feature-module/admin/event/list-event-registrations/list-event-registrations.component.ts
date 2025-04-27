import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventRegistrationService } from 'src/app/shared/services/event-registration.service';
import { EventRegistration } from 'src/app/shared/models/event-registration.model';

@Component({
  selector: 'app-list-event-registrations',
  templateUrl: './list-event-registrations.component.html',
  styleUrls: ['./list-event-registrations.component.css']
})
export class ListEventRegistrationsComponent implements OnInit {

  registrations: EventRegistration[] = [];
  displayedEvents: Event[] = [];
  eventId!: number;
  currentPage: number = 1;
  pageSize: number = 1;
  totalData: number = 0;
  pageNumberArray: number[] = [];
  serialNumberArray: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private registrationService: EventRegistrationService
  ) {}

  ngOnInit(): void {
    this.eventId = Number(this.route.snapshot.paramMap.get('eventId'));
    this.loadRegistrations();
  }

  loadRegistrations(): void {
    this.registrationService.getRegistrationsForEvent(this.eventId).subscribe({
      next: data => this.registrations = data,
      
      error: err => console.error('Erreur chargement des inscriptions', err)
    });
    this.updateDisplayedEvents();
  }
  updateDisplayedEvents(): void {
    

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
   

    this.pageNumberArray = Array.from({ length: Math.ceil(this.totalData / this.pageSize) }, (_, i) => i + 1);
    this.serialNumberArray = this.displayedEvents.map((_, i) => start + i + 1);
  }

  deleteRegistration(id: number): void {
    if (confirm('Supprimer cette inscription ?')) {
      this.registrationService.deleteRegistrationByAdmin(id).subscribe({
        next: () => this.loadRegistrations(),
        error: err => { console.error('Erreur suppression', err);
          if (err.error && err.error.message) {
            alert('❌ Error: ' + err.error.message);
          } else {
            alert('❌ An unexpected error occurred while deleting the event.');
          }
        }
      });
  }
}
  sortEvents(): void {
    this.currentPage = 1;
    this.updateDisplayedEvents();
  }

  moveToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedEvents();
  }
  PageSize(): void {
    this.currentPage = 1;
    this.updateDisplayedEvents();
  }
}
