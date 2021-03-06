import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private http: HttpClient) {}

  get(id: number): Observable<Animal> {
    return this.http.get<Animal>(`/api/animals/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>('/api/animals');
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`/api/animals/${id}`);
  }

  create(data: Animal): Observable<Animal> {
    return this.http.post<Animal>('/api/animals/', data);
  }

  update(data: Animal): Observable<Animal> {
    return this.http.put<Animal>(`/api/animals/${data.id}`, data);
  }
}
