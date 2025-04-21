import { Event } from './event.model';

export interface EventRegistration {
  registrationId: number;
  registrationDate: string;
  status: 'CONFIRMED' | 'CANCELLED' | 'WAITING_LIST';
  event: Event;
  userEmail: string;
}
