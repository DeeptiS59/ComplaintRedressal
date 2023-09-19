import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggTicketsComponent } from './engg-tickets.component';

describe('EnggTicketsComponent', () => {
  let component: EnggTicketsComponent;
  let fixture: ComponentFixture<EnggTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnggTicketsComponent]
    });
    fixture = TestBed.createComponent(EnggTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
