import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaythreeComponent } from './daythree.component';

describe('DaythreeComponent', () => {
  let component: DaythreeComponent;
  let fixture: ComponentFixture<DaythreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaythreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
