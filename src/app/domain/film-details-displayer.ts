import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import PDisplayFilmDetail from './ports/p-display-film-details';
import PManageFilms from './ports/p-manage-films';
import PManageMessages from './ports/p-manage-messages';
import { Film } from './models/film';

@Injectable()
export class FilmDetailsDisplayer implements PDisplayFilmDetail {

  film: Film | undefined = undefined;

  constructor(@Inject("PManageFilms") private _manageFilms: PManageFilms,
              @Inject("PManageMessages") private _manageMessages: PManageMessages) { }
  
  askFilmDetail(id: number): Observable<void> {
    return this._manageFilms.getFilm(id).pipe(
      tap(_ => this._manageMessages.addMessage(`Film fetched with id=${id}`)),
      catchError(error => { 
        this._manageMessages.addMessage(`ERROR FilmDetailsDisplayer.askFilmDetail: ${error}`)
        return of({} as Film)
      }),
      map(film => {this.film = film})
  );
  }

  askFilmChange(newFilm: Film): Observable<void> {
    if( this.film === undefined ){
      return throwError(() => new Error('No film selected!'));
    }
    const updatedFilm = {id: this.film.id, name: newFilm.name, description: newFilm.description};
    return this._manageFilms.updateFilm(updatedFilm).pipe(
        tap(_ => this._manageMessages.addMessage(`Film updated successfully with id=${this.film ? this.film.id : 0}`)),
        catchError(error => { 
          this._manageMessages.addMessage(`ERROR FilmDetailsDisplayer.askFilmChange: ${error}`)
          return of(this.film as Film)
        }),
        map(film => {if(this.film){this.film.name = film.name}})
    );
  }
}
