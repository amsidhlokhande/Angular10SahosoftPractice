import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorParentComponent } from './color-parent.component';

describe('ColorParentComponent', () => {
  let component: ColorParentComponent;
  let fixture: ComponentFixture<ColorParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
