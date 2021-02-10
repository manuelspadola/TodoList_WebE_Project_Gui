import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodolisteComponent } from './create-todoliste.component';

describe('CreateTodolisteComponent', () => {
  let component: CreateTodolisteComponent;
  let fixture: ComponentFixture<CreateTodolisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTodolisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodolisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
