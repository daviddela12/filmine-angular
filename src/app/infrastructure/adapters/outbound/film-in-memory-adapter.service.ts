import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Film } from '../../../domain/models/film';
import PManageFilms from '../../../application/ports/outbound/p-manage-films';

@Injectable({
  providedIn: 'root'
})
export class FilmInMemoryAdapterService implements PManageFilms {

  private filmsUrl = 'api/films';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsUrl).pipe(
      catchError(this.handleHttpError())
    );
  }

  getFilm(id: number): Observable<Film> {
    const url = `${this.filmsUrl}/${id}`;
    return this.http.get<Film>(url).pipe(
      catchError(this.handleHttpError())
    );
  }
  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.filmsUrl, film, this.httpOptions).pipe(
      catchError(this.handleHttpError())
    );
  }

  updateFilm(film: Film): Observable<Film> {
    return this.http.put<Film>(this.filmsUrl, film, this.httpOptions).pipe(
      catchError(this.handleHttpError()),
      map(_ => film)
    );
  }

  deleteFilm(id: number): Observable<number> {
    const url = `${this.filmsUrl}/${id}`;
    return this.http.delete<Film>(url, this.httpOptions).pipe(
      catchError(this.handleHttpError()),
      map(_ => id)
    );
  }

  private handleHttpError() {
    return (error: any): Observable<any> => {
      throw new Error(error.body.error);
    };
  }
}
