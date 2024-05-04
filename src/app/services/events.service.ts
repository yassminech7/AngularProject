import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  private apiUrl = 'http://localhost:3000/events';

  constructor(private http: HttpClient) { }

  // Récupérer tous les événements d'un club spécifique
  getEventsByClubId(clubId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?clubId=${clubId}`);
  }

  addEvent(clubId: string, eventData: any): Observable<any> {
    console.log("eventDataService", eventData);
    console.log("cluIdService", clubId);
    eventData.clubId = clubId;
    return this.http.post<any>(this.apiUrl, eventData);
  }

  getEventDetails(eventId: string) {
    const eventUrl = `${this.apiUrl}/${eventId}`;
    return this.http.get(eventUrl);
  }

  updateEvent(eventId: number, eventData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${eventId}`, eventData);
  }

  deleteEvent(eventId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${eventId}`);
  }

  getEventById(eventId: string): Observable<Event> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.get<Event>(url);
  }
  updateClubData(eventId: string, data: any): Observable<Event> {
    const url = `${this.apiUrl}/${eventId}`;
    return this.http.put<any>(`${this.apiUrl}/${eventId}`, data);
  }
  getAllEvents() {
    return this.http.get(this.apiUrl);
  }

}
