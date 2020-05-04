import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FencerAddComponent } from './fencer-add.component';

describe('FencerAddComponent', () => {
  let component: FencerAddComponent;
  let fixture: ComponentFixture<FencerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FencerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FencerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
