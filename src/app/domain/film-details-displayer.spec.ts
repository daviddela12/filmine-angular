import { TestBed } from '@angular/core/testing';

import { FilmDetailsDisplayerService } from './film-details-displayer.service';

describe('FilmDetailsDisplayerService', () => {
  let service: FilmDetailsDisplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmDetailsDisplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
