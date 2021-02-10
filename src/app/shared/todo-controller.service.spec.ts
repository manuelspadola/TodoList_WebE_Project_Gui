import { TestBed } from '@angular/core/testing';

import { TodoControllerService } from './todo-controller.service';

describe('TodoControllerService', () => {
  let service: TodoControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
