import { Observable } from "rxjs"
import { Film } from "../domain/models/film"

export default interface PManageFilms {

    getFilms(): Observable<Film[]>
    searchFilms(term: string): Observable<Film[]>
    getFilm(id: number): Observable<Film> 
    addFilm(hero: Film): Observable<Film>
    updateFilm(hero: Film): Observable<Film>
    deleteFilm(id: number): Observable<number>

}