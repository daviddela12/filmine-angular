import { Observable } from "rxjs"
import { Film } from "../domain/models/film"

export default interface PDisplayFilms {

    films: Film[]
    
    askFilmsList(): Observable<void>
    askFilmCreation(film: Film): Observable<void>
    askFilmDeletion(film: Film): Observable<void>

}