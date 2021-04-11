import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookSearchComponent } from './add-book-search.component';

describe('AddBookSearchComponent', () => {
  let component: AddBookSearchComponent;
  let fixture: ComponentFixture<AddBookSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBookSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
