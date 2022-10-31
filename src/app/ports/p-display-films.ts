import { Observable } from "rxjs"
import { Film } from "../domain/models/film"

export default interface PDisplayFilms {

    films: Film[]
    
    askFilmsList(): Observable<void>
    askFilmsFiltered(filter: string, allowEmpty?: boolean): Observable<void>
    askFilmCreation(filmName: string): Observable<void>
    askFilmDeletion(film: Film): Observable<void>

}