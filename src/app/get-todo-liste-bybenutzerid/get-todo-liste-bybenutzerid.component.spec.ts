import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTodoListeBybenutzeridComponent } from './get-todo-liste-bybenutzerid.component';

describe('GetTodoListeBybenutzeridComponent', () => {
  let component: GetTodoListeBybenutzeridComponent;
  let fixture: ComponentFixture<GetTodoListeBybenutzeridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTodoListeBybenutzeridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTodoListeBybenutzeridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
