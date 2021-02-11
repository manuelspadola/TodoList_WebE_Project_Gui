import { TestBed } from '@angular/core/testing';

import { BenutzerControllerService } from './benutzer-controller.service';

describe('BenutzerControllerService', () => {
  let service: BenutzerControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenutzerControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
