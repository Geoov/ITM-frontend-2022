import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCandidateComponent } from './see-candidate.component';

describe('SeeCandidateComponent', () => {
  let component: SeeCandidateComponent;
  let fixture: ComponentFixture<SeeCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
