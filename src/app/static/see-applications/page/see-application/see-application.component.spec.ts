import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeApplicationComponent } from './see-application.component';

describe('SeeApplicationComponent', () => {
  let component: SeeApplicationComponent;
  let fixture: ComponentFixture<SeeApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
