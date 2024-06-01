import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleStaffComponent } from './toggle-staff.component';

describe('ToggleStaffComponent', () => {
  let component: ToggleStaffComponent;
  let fixture: ComponentFixture<ToggleStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleStaffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
