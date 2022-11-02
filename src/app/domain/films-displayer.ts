import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import PDisplayFilms from '../ports/p-display-films';
import PManageFilms from '../ports/p-manage-films';
import PManageMessages from '../ports/p-manage-messages';
import { Film } from './models/film';

@Injectable()
export class FilmsDisplayer implements PDisplayFilms {
  
  films: Film[] = [];

  constructor(@Inject("PManageFilms") private _manageFilms: PManageFilms,
              @Inject("PManageMessages") private _manageMessages: PManageMessages) { }

  askFilmsList(): Observable<void> {
    return this._manageFilms.getFilms().pipe(
      tap(_ => this._manageMessages.addMessage("FilmsDisplayer.askFilmsList said: films fetched")),
      catchError(error => { 
        this._manageMessages.addMessage(`ERROR FilmsDisplayer.askFilmsList: ${error}`)
        return of([])
      }),
      map(films => {this.films = films})
    );
  }

  askFilmCreation(film: Film): Observable<void> {
    return this._manageFilms.addFilm(film).pipe(
      tap(film => this._manageMessages.addMessage(`FilmsDisplayer.askFilmCreation said: film created with id=${film.id}`)),
      catchError(error => { 
        this._manageMessages.addMessage(`ERROR FilmsDisplayer.askFilmCreation: ${error}`)
        return of(film as Film)
      }),
      map(film => {
        this.films.push(film)
      })
    )
  }
  
  askFilmDeletion(film: Film): Observable<void> {
    return this._manageFilms.deleteFilm(film.id).pipe(
      tap(filmId => this._manageMessages.addMessage(`FilmsDisplayer.askFilmDeletion said: film updated with id=${filmId}`)),
      catchError(error => { 
        this._manageMessages.addMessage(`ERROR FilmsDisplayer.askFilmDeletion: ${error}`)
        return of(film as Film)
      }),
      map(deletedFilmId => {this.films = this.films.filter(f => f.id !== deletedFilmId)})
    )
  }

}
