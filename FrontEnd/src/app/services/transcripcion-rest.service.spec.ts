import { TestBed } from '@angular/core/testing';

import { TranscripcionRestService } from './transcripcion-rest.service';

describe('TranscripcionRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranscripcionRestService = TestBed.get(TranscripcionRestService);
    expect(service).toBeTruthy();
  });
});
