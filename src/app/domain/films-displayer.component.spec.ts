import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsDisplayerComponent } from './films-displayer.component';

describe('FilmsDisplayerComponent', () => {
  let component: FilmsDisplayerComponent;
  let fixture: ComponentFixture<FilmsDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
