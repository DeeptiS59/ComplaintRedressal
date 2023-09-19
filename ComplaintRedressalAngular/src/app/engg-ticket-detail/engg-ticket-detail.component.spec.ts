import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnggTicketDetailComponent } from './engg-ticket-detail.component';

describe('EnggTicketDetailComponent', () => {
  let component: EnggTicketDetailComponent;
  let fixture: ComponentFixture<EnggTicketDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnggTicketDetailComponent]
    });
    fixture = TestBed.createComponent(EnggTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
