import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleUserComponent } from './toggle-user.component';

describe('ToggleUserComponent', () => {
  let component: ToggleUserComponent;
  let fixture: ComponentFixture<ToggleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
