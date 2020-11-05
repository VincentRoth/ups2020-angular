import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinarian } from './veterinarian';

@Injectable({
  providedIn: 'root',
})
export class VeterinarianService {
  constructor(private http: HttpClient) {}

  get(id: number): Observable<Veterinarian> {
    return this.http.get<Veterinarian>(`/api/veterinarians/${id}`);
  }

  getAll(): Observable<Veterinarian[]> {
    return this.http.get<Veterinarian[]>('/api/veterinarians');
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/veterinarians/${id}`);
  }
}
