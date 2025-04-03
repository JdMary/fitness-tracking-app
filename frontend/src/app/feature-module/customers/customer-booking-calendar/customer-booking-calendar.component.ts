import { Component, ViewChild } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions,EventClickArg } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { DataService } from 'src/app/shared/data/data.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
interface data {
  value: string;
}
@Component({
  selector: 'app-customer-booking-calendar',
  templateUrl: './customer-booking-calendar.component.html',
  styleUrls: ['./customer-booking-calendar.component.css']
})
export class CustomerBookingCalendarComponent {
  public routes = routes;
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  public selectedValue = '';
  showAddEventModal = false;
  addtime2: Date | undefined;
  showEventDetailsModal = false;
  eventDetails = { title: '' };
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
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin],
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'title, prev,today next',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
    },
    navLinks: true, // can click day/week names to navigate views
    // businessHours: true, // display business hours
    editable: true,
    selectable: true,
    events: [
      {
        title: '12:30am Laptop serv...',
        color: '#EAEBEE',
					textColor: '#242B3A',
        start: new Date(Date.now() - 168000000).toISOString().slice(0, 10)
      },
      {
        title: '10:00am House Clean..',
        color: '#EAEBEE',
					textColor: '#242B3A',
        start: new Date(Date.now() + 338000000).toISOString().slice(0, 10)
      },
      {
        title: '11:00am Washing ...',
        color: '#EAEBEE',
					textColor: '#242B3A',
        start: new Date(Date.now() - 338000000).toISOString().slice(0, 10)
      },
      {
        title: '02:00pm Toughened...',
        color: '#EAEBEE',
					textColor: '#242B3A',
        start: new Date(Date.now() + 68000000).toISOString().slice(0, 10)
      }
    ],
    eventClick: this.handleEventClick.bind(this)
  };

  handleDateClick() {
    this.showAddEventModal = true;
  }

  handleEventClick(info: EventClickArg) {
    this.eventDetails = {
      title: info.event.title
    };
    this.showEventDetailsModal = true;
  }

  handleAddEventClose() {
    this.showAddEventModal = false;
  }

  handleEventDetailsClose() {
    this.showEventDetailsModal = false;
  }
}
