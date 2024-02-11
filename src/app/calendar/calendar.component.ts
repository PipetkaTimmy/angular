import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EventModel } from '../event.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: EventModel[] = [];
  selectedEvent: EventModel | null = null;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  selectEvent(event: EventModel): void {
    this.selectedEvent = event;
  }

  clearSelection(): void {
    this.selectedEvent = null;
  }

  addEvent(event: EventModel): void {
    this.eventService.addEvent(event);
    this.clearSelection();
  }

  updateEvent(updatedEvent: EventModel): void {
    this.eventService.updateEvent(updatedEvent);
    this.clearSelection();
  }

  removeEvent(eventId: number): void {
    if (this.selectedEvent && this.selectedEvent.id === eventId) {
      this.clearSelection();
    }
    this.eventService.removeEvent(eventId);
  }


  updateDescription(description: string): void {
    if (this.selectedEvent) {
      this.selectedEvent.description = description;
    }
  }

}
