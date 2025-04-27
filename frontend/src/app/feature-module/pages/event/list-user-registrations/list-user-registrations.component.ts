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
  paginatedRegistrations: EventRegistration[] = [];
  registrations: EventRegistration[] = [];
  currentPage: number = 1;
  pageSize: number = 1;
  totalPages: number = 0;
  routes = routes;
  isCollapsed = false;
  searchKeyword: string = '';

  constructor(private eventRegistrationService: EventRegistrationService) {}

  ngOnInit(): void {
    this.loadRegistrations();
  }

  loadRegistrations(): void {
    this.eventRegistrationService.getUserRegistrations().subscribe({
      next: (data: EventRegistration[]) => {
        this.registrations = data;
        this.totalPages = Math.ceil(this.registrations.length / this.pageSize);
        this.currentPage = 1;
        this.updatePaginatedRegistrations();
      },
      error: (err) => console.error('Error loading registrations', err)
    });
  }

  cancelRegistration(registrationId: number): void {
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you really want to cancel this registration ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventRegistrationService.cancelRegistration(registrationId).subscribe({
          next: () => {
            Swal.fire('Canceled', 'Your registration has been canceled.', 'success');
            this.loadRegistrations();
          },
          error: (err) => {
            Swal.fire('Erreur', err.error.message || 'Unable to cancel the registration.', 'error');
          }
        });
      }
    });
  }

  onSearch(event: any): void {
    const input = event.target as HTMLInputElement;
    const keyword = input.value.trim();
    const token = localStorage.getItem('authToken') || '';

    if (keyword) {
      this.eventRegistrationService.searchEventRegistrations(token, undefined, keyword).subscribe({
        next: (results) => {
          this.registrations = results;
          this.totalPages = Math.ceil(this.registrations.length / this.pageSize);
          this.currentPage = 1;
          this.updatePaginatedRegistrations();
        },
        error: (err) => {
          console.error('Erreur recherche inscriptions', err);
        }
      });
    } else {
      this.loadRegistrations(); 
    }
  }

  updatePaginatedRegistrations(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedRegistrations = this.registrations.slice(start, end);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedRegistrations();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedRegistrations();
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedRegistrations();
  }
}