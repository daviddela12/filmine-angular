import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Film } from '../domain/models/film';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const films = [
      { id: 1, name: 'The Lion King' },
      { id: 2, name: 'Pocahontas' },
      { id: 3, name: 'Beauty and the Beast' },
      { id: 4, name: 'Aladdin' },
      { id: 5, name: 'Toy Story' },
      { id: 6, name: 'Dumbo' },
    ];
    return {films};
  }

  genId(films: Film[]): number {
    return films.length > 0 ? Math.max(...films.map(film => film.id)) + 1 : 0;
  }
}
