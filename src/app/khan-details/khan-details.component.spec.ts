import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhanDetailsComponent } from './khan-details.component';

describe('KhanDetailsComponent', () => {
  let component: KhanDetailsComponent;
  let fixture: ComponentFixture<KhanDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhanDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
