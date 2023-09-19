import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTicketDetailComponent } from './manager-ticket-detail.component';

describe('ManagerTicketDetailComponent', () => {
  let component: ManagerTicketDetailComponent;
  let fixture: ComponentFixture<ManagerTicketDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerTicketDetailComponent]
    });
    fixture = TestBed.createComponent(ManagerTicketDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
