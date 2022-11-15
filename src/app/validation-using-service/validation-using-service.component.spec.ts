import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationUsingServiceComponent } from './validation-using-service.component';

describe('ValidationUsingServiceComponent', () => {
  let component: ValidationUsingServiceComponent;
  let fixture: ComponentFixture<ValidationUsingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationUsingServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationUsingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
