import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBenutzerToTodoListeComponent } from './add-benutzer-to-todo-liste.component';

describe('AddBenutzerToTodoListeComponent', () => {
  let component: AddBenutzerToTodoListeComponent;
  let fixture: ComponentFixture<AddBenutzerToTodoListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBenutzerToTodoListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBenutzerToTodoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
