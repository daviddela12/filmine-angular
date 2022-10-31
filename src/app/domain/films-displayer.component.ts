import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PDisplayFilms from '../ports/p-display-films';
import { Film } from './models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsDisplayerComponent implements PDisplayFilms {
  
  films: Film[] = [];
  filter: string = '';

  constructor() { }

  askFilmsList(): Observable<void> {
    throw new Error('Method not implemented.');
  }
  askFilmsFiltered(filter: string, allowEmpty?: boolean | undefined): Observable<void> {
    throw new Error('Method not implemented.');
  }
  askFilmCreation(filmName: string): Observable<void> {
    throw new Error('Method not implemented.');
  }
  askFilmDeletion(film: Film): Observable<void> {
    throw new Error('Method not implemented.');
  }

}
