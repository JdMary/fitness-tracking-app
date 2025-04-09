import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-provider-holiday',
  templateUrl: './provider-holiday.component.html',
  styleUrls: ['./provider-holiday.component.css']
})
export class ProviderHolidayComponent {
  public routes = routes
  options = {};
  events = [];
  constructor(private data: DataService) {
    this.data.getEvents().subscribe((events) => {
      this.options = { ...this.options, ...{ events: events } };
    });
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialDate: new Date(),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      initialView: 'dayGridMonth',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      events: [
        { title: 'Meeting', start: new Date() }
      ]
    };
  }
}
