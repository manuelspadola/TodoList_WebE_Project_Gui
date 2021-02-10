import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTodoListeComponent } from './get-all-todo-liste.component';

describe('GetAllTodoListeComponent', () => {
  let component: GetAllTodoListeComponent;
  let fixture: ComponentFixture<GetAllTodoListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTodoListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTodoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
