import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustTicketDetailComponent } from './cust-ticket-detail.component';

describe('CustTicketDetailComponent', () => {
  let component: CustTicketDetailComponent;
  let fixture: ComponentFixture<CustTicketDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustTicketDetailComponent]
    });
    fixture = TestBed.createComponent(CustTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
