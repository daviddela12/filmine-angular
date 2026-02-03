import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const films = [
      { id: 1, name: 'The Lion King', description: 'The Lion King Description' },
      { id: 2, name: 'Pocahontas', description: 'Pocahontas Description' },
      { id: 3, name: 'Beauty and the Beast', description: 'Beauty and the Beast Description' },
      { id: 4, name: 'Aladdin', description: 'Aladdin Description' },
      { id: 5, name: 'Toy Story', description: 'Toy Story Description' },
      { id: 6, name: 'Dumbo', description: 'Dumbo Description' },
    ];
    return {films};
  }
}
