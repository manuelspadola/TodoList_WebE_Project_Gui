import { TestBed } from '@angular/core/testing';

import { TodoListeControllerService } from './todo-liste-controller.service';

describe('TodoListeControllerService', () => {
  let service: TodoListeControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListeControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
