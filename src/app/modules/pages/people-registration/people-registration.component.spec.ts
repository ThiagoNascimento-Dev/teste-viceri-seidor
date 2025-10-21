import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleRegistrationComponent } from './people-registration.component';

describe('PeopleRegistrationComponent', () => {
  let component: PeopleRegistrationComponent;
  let fixture: ComponentFixture<PeopleRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
