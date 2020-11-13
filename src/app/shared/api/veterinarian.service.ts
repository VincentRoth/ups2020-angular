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

  create(data: Veterinarian): Observable<Veterinarian> {
    return this.http.post<Veterinarian>('/api/veterinarians', data);
  }

  update(data: Veterinarian): Observable<Veterinarian> {
    return this.http.put<Veterinarian>(`/api/veterinarians/${data.id}`, data);
  }
}
