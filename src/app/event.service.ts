import { Injectable } from '@angular/core';
import { EventModel } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: EventModel[] = [];

  getEvents(): EventModel[] {
    return this.events;
  }

  addEvent(event: EventModel): void {
    this.events.push(event);
  }

  updateEvent(updatedEvent: EventModel): void {
    const index = this.events.findIndex(e => e.id === updatedEvent.id);
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
  }

  removeEvent(eventId: number): void {
    this.events = this.events.filter(e => e.id !== eventId);
  }
}
