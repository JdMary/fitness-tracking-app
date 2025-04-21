import { Component, OnInit } from '@angular/core';
import { EventRegistrationService } from 'src/app/shared/services/event-registration.service';
import { EventRegistration } from 'src/app/shared/models/event-registration.model';
import { routes } from 'src/app/shared/routes/routes';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-user-registrations',
  templateUrl: './list-user-registrations.component.html',
  styleUrls: ['./list-user-registrations.component.css']
})
export class ListUserRegistrationsComponent implements OnInit {

  registrations: EventRegistration[] = [];
  isClassAdded: boolean[] = [];
  routes = routes;

  constructor(private eventRegistrationService: EventRegistrationService) {}

  ngOnInit(): void {
    this.loadRegistrations();
  }

  toggleClass(index: number): void {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  loadRegistrations(): void {
    this.eventRegistrationService.getUserRegistrations().subscribe({
      next: (data: EventRegistration[]) => this.registrations = data,
      error: (err) => console.error('Erreur lors du chargement des inscriptions', err)
    });
  }
  cancelRegistration(registrationId: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Souhaitez-vous vraiment annuler cette inscription ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, annuler',
      cancelButtonText: 'Non'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventRegistrationService.cancelRegistration(registrationId).subscribe({
          next: () => {
            Swal.fire('Annulé', 'Votre inscription a été annulée.', 'success');
            this.loadRegistrations(); // Recharge les inscriptions
          },
          error: err => {
            Swal.fire('Erreur', err.error.message || 'Impossible d\'annuler l’inscription.', 'error');
          }
        });
      }
    });
  }
  
}
