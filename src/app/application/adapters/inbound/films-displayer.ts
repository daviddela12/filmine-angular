import { Inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import PDisplayFilms from '../../ports/inbound/p-display-films';
import PManageFilms from '../../ports/outbound/p-manage-films';
import PManageMessages from '../../ports/outbound/p-manage-messages';
import { Film } from '../../../domain/models/film';

@Injectable()
export class FilmsDisplayer implements PDisplayFilms {

  films: Film[] = [];

  constructor(@Inject("PManageFilms") private _manageFilms: PManageFilms,
              @Inject("PManageMessages") private _manageMessages: PManageMessages) { }

  askFilmsList(): Observable<void> {
    return this._manageFilms.getFilms().pipe(
      tap(_ => this._manageMessages.addMessage("FilmsDisplayer.askFilmsList said: Films fetched")),
      catchError(error => {
        this._manageMessages.addMessage(`ERROR FilmsDisplayer.askFilmsList: ${error}`)
        return of([])
      }),
      map(films => {this.films = films})
    );
  }

  askFilmCreation(film: Film): Observable<void> {
    return this._manageFilms.addFilm(film).pipe(
      tap(film => this._manageMessages.addMessage(`FilmsDisplayer.askFilmCreation said: Film created with id=${film.id}`)),
      catchError(error => {
        this._manageMessages.addMessage(`ERROR FilmsDisplayer.askFilmCreation: ${error}`)
        return of(film as Film)
      }),
      map(film => {
        this.films.push(film)
      })
    )
  }

  askFilmDeletion(idFilm: number): Observable<void> {
    return confirm("Are you sure?") ? this._manageFilms.deleteFilm(idFilm).pipe(
      tap(filmId => this._manageMessages.addMessage(`FilmsDisplayer.askFilmDeletion said: Film deleted with id=${filmId}`)),
      catchError(error => {
        this._manageMessages.addMessage(`ERROR FilmsDisplayer.askFilmDeletion: ${error}`)
        return of({} as Film)
      }),
      map(deletedFilmId => {this.films = this.films.filter(f => f.id !== deletedFilmId)})
    ) : of();
  }

}
