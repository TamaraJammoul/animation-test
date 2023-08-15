import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleComponentComponent } from './circle.component';

describe('CircleComponentComponent', () => {
  let component: CircleComponentComponent;
  let fixture: ComponentFixture<CircleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircleComponentComponent]
    });
    fixture = TestBed.createComponent(CircleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
