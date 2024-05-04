import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClubsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  url = 'http://localhost:3000/clubs';
  constructor(private http: HttpClient) { }
  getAllClubs() {
    return this.http.get(this.url);
  }

  getClubDetails(clubId: string) {
    const clubUrl = `${this.url}/${clubId}`;
    return this.http.get(clubUrl);
  }

  saveClubData(data: any) {
    console.log(data);
    return this.http.post(this.url, data);
  }

  deleteClub(clubId: any) {
    return this.http.delete(`${this.url}/${clubId}`);
  }

  getClubById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  updateClubData(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
