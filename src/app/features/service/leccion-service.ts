import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap, catchError, throwError, delay, map, timeout } from 'rxjs';
import { PaisResponse } from '../models/leccion-interface';

@Injectable({ providedIn: 'root' })
export class LeccionService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://restcountries.com/v3.1';

  getCountries(): Observable<PaisResponse[]> {
    return this.http
      .get<PaisResponse[]>(`${this.baseUrl}/all?fields=name,capital,flags`)
      .pipe(
        tap((response) => {
          console.log('Countries API response:', response.length);
        }),
        catchError(() =>
          throwError(() => new Error('No se pudo cargar los paises'))
        )
      );
  }

  getCountryByName(name: string): Observable<PaisResponse> {
    return this.http
      .get<PaisResponse[]>(`${this.baseUrl}/name/${name}?fields=name,capital,flags`)
      .pipe(
        delay(300),
        timeout(5000),
        map((countries) => countries[0]),
        tap((pais) => {
          console.log('Country loaded:', pais.name.common);
        }),
        catchError(() =>
          throwError(() => new Error('No se pudo cargar el pais'))
        )
      );
  }
}
