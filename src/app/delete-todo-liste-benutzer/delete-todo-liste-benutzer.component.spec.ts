import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodoListeBenutzerComponent } from './delete-todo-liste-benutzer.component';

describe('DeleteTodoListeBenutzerComponent', () => {
  let component: DeleteTodoListeBenutzerComponent;
  let fixture: ComponentFixture<DeleteTodoListeBenutzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTodoListeBenutzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTodoListeBenutzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
