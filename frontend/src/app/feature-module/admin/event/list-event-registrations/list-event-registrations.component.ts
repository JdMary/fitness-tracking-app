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
  eventId!: number;

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
      error: err => console.error('❌ Erreur chargement des inscriptions', err)
    });
  }

  deleteRegistration(id: number): void {
    if (confirm('Supprimer cette inscription ?')) {
      this.registrationService.deleteRegistrationByAdmin(id).subscribe({
        next: () => this.loadRegistrations(),
        error: err => console.error('Erreur suppression', err)
      });
    }
  }
}
