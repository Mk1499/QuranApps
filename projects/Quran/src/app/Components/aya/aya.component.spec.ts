import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyaComponent } from './aya.component';

describe('AyaComponent', () => {
  let component: AyaComponent;
  let fixture: ComponentFixture<AyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
