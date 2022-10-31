import { TestBed } from '@angular/core/testing';

import { MessagesDisplayerService } from './messages-displayer.service';

describe('MessagesDisplayerService', () => {
  let service: MessagesDisplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesDisplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
