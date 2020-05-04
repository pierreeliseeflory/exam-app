import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FencersComponent } from './fencers.component';

describe('FencersComponent', () => {
  let component: FencersComponent;
  let fixture: ComponentFixture<FencersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FencersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FencersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
