import { Observable } from "rxjs"
import { Film } from "../models/film"

export default interface PDisplayFilmDetail {

    film: Film | undefined;

    askFilmDetail(id: number): Observable<void>
    askFilmChange(film: Film): Observable<void>
}