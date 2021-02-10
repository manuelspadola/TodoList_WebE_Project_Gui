import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBenutzerFromTodoListComponent } from './delete-benutzer-from-todo-list.component';

describe('DeleteBenutzerFromTodoListComponent', () => {
  let component: DeleteBenutzerFromTodoListComponent;
  let fixture: ComponentFixture<DeleteBenutzerFromTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBenutzerFromTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBenutzerFromTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
