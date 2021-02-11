import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBenutzerComponent } from './get-all-benutzer.component';

describe('GetAllBenutzerComponent', () => {
  let component: GetAllBenutzerComponent;
  let fixture: ComponentFixture<GetAllBenutzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBenutzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBenutzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
