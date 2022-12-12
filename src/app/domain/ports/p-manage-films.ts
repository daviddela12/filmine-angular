import { Observable } from "rxjs"
import { Film } from "../models/film"

export default interface PManageFilms {

    getFilms(): Observable<Film[]>
    getFilm(id: number): Observable<Film> 
    addFilm(film: Film): Observable<Film>
    updateFilm(film: Film): Observable<Film>
    deleteFilm(id: number): Observable<number>

}