import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/services/event.service';
import { Event } from 'src/app/shared/models/event.model';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  events: Event[] = [];
  displayedEvents: Event[] = [];
  selectedValue = '';
  selectedList = [
    { value: 'A - Z' },
    { value: 'Z - A' },
    { value: 'Date Asc' },
    { value: 'Date Desc' }
  ];

  currentPage: number = 1;
  pageSize: number = 1;
  totalData: number = 0;
  pageNumberArray: number[] = [];
  serialNumberArray: number[] = [];

  searchKeyword: string = '';

  routes = routes;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.totalData = data.length;
        this.currentPage = 1;
        this.updateDisplayedEvents();
      },
      error: (err) => console.error(' Error loading events', err)
    });
  }

  updateDisplayedEvents(): void {
    let filtered = this.events;

    if (this.selectedValue === 'A - Z') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.selectedValue === 'Z - A') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (this.selectedValue === 'Date Asc') {
      filtered.sort((a, b) => a.eventDate.localeCompare(b.eventDate));
    } else if (this.selectedValue === 'Date Desc') {
      filtered.sort((a, b) => b.eventDate.localeCompare(a.eventDate));
    }

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedEvents = filtered.slice(start, end);

    this.pageNumberArray = Array.from({ length: Math.ceil(this.totalData / this.pageSize) }, (_, i) => i + 1);
    this.serialNumberArray = this.displayedEvents.map((_, i) => start + i + 1);
  }

  onSearch(event: any): void {
    const input = event.target as HTMLInputElement;
    const keyword = input.value.trim();

    if (keyword) {
      this.eventService.searchEvents(keyword).subscribe({
        next: (res) => {
          this.events = res;
          this.totalData = res.length;
          this.currentPage = 1;
          this.updateDisplayedEvents();
        },
        error: (err) => {
          console.error('Error searching events', err);
        }
      });
    } else {
      this.loadEvents();
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

  openDeleteModal(eventId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this event?');
    if (confirmDelete) {
      this.eventService.deleteEvent(eventId).subscribe({
        next: () => {
          console.log(` Event deleted successfully.`);
          this.loadEvents();
        },
        error: (err) => {
          console.error(' Error deleting event', err);
          if (err.error && err.error.message) {
            alert('❌ Error: ' + err.error.message);
          } else {
            alert('❌ An unexpected error occurred while deleting the event.');
          }
        }
      });
    }
  }
}
