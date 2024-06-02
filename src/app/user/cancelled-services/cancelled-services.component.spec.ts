import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledServicesComponent } from './cancelled-services.component';

describe('CancelledServicesComponent', () => {
  let component: CancelledServicesComponent;
  let fixture: ComponentFixture<CancelledServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
