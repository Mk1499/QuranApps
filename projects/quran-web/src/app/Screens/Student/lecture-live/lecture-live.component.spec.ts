import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureLiveComponent } from './lecture-live.component';

describe('LectureLiveComponent', () => {
  let component: LectureLiveComponent;
  let fixture: ComponentFixture<LectureLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
