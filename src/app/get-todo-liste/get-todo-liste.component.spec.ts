import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodoListeComponent } from './get-todo-liste.component';

describe('GetTodoListeComponent', () => {
  let component: GetTodoListeComponent;
  let fixture: ComponentFixture<GetTodoListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTodoListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTodoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
