import { Observable } from "rxjs"
import { Film } from "../models/film"

export default interface PDisplayFilms {

    films: Film[]
    
    askFilmsList(): Observable<void>
    askFilmCreation(film: Film): Observable<void>
    askFilmDeletion(idFilm: number): Observable<void>

}