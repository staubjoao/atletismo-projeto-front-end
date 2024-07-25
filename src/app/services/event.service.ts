import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = `${environment.apiUrl}/event`;

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event);
  }

  // getClubByCode(code: string): Observable<any> {
  //   if (code === '') {
  //     return new Observable();
  //   }
  //   const url = `${this.apiUrl}/findByCode/${code}`;
  //   return this.http.get<any>(url);
  // }

}
