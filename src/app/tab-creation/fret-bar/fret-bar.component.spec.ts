import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretBarComponent } from './fret-bar.component';

describe('FretBarComponent', () => {
  let component: FretBarComponent;
  let fixture: ComponentFixture<FretBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
