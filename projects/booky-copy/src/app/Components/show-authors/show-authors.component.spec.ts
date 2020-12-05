import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAuthorsComponent } from './show-authors.component';

describe('ShowAuthorsComponent', () => {
  let component: ShowAuthorsComponent;
  let fixture: ComponentFixture<ShowAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAuthorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
