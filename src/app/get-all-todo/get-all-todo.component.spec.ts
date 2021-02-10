import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTodoComponent } from './get-all-todo.component';

describe('GetAllTodoComponent', () => {
  let component: GetAllTodoComponent;
  let fixture: ComponentFixture<GetAllTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
