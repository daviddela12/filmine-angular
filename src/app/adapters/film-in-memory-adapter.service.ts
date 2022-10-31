import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../domain/models/film';
import PManageFilms from '../ports/p-manage-films';

@Injectable({
  providedIn: 'root'
})
export class FilmInMemoryAdapterService implements PManageFilms {

  constructor() { }
  
  getFilms(): Observable<Film[]> {
    throw new Error('Method not implemented.');
  }
  searchFilms(term: string): Observable<Film[]> {
    throw new Error('Method not implemented.');
  }
  getFilm(id: number): Observable<Film> {
    throw new Error('Method not implemented.');
  }
  addFilm(hero: Film): Observable<Film> {
    throw new Error('Method not implemented.');
  }
  updateFilm(hero: Film): Observable<Film> {
    throw new Error('Method not implemented.');
  }
  deleteFilm(id: number): Observable<number> {
    throw new Error('Method not implemented.');
  }
}
