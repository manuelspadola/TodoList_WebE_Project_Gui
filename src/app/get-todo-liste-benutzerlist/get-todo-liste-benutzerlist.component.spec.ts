import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodoListeBenutzerlistComponent } from './get-todo-liste-benutzerlist.component';

describe('GetTodoListeBenutzerlistComponent', () => {
  let component: GetTodoListeBenutzerlistComponent;
  let fixture: ComponentFixture<GetTodoListeBenutzerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTodoListeBenutzerlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTodoListeBenutzerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
