import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import PDisplayFilms from '../ports/p-display-films';
import PManageFilms from '../ports/p-manage-films';
import { Film } from './models/film';

@Injectable()
export class FilmsDisplayer implements PDisplayFilms {
  
  films: Film[] = [];

  constructor(@Inject("PManageFilms") private _manageFilms: PManageFilms) { }

  askFilmsList(): Observable<void> {
    return this._manageFilms.getFilms().pipe(
      map(films => {this.films = films})
    );
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
