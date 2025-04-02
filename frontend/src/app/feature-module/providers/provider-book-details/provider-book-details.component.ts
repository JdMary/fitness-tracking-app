import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { DataService } from 'src/app/shared/data/data.service';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-book-details',
  templateUrl: './provider-book-details.component.html',
  styleUrls: ['./provider-book-details.component.css']
})
export class ProviderBookDetailsComponent {
  public routes = routes;
  public selectedValue = '';

  selectedList: data[] = [
    {value: 'A - Z'},
    {value: 'Z - A'},
  ];
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
