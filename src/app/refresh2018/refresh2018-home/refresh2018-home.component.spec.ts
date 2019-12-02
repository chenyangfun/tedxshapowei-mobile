import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Refresh2018HomeComponent } from './refresh2018-home.component';

describe('Refresh2018HomeComponent', () => {
  let component: Refresh2018HomeComponent;
  let fixture: ComponentFixture<Refresh2018HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Refresh2018HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Refresh2018HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
