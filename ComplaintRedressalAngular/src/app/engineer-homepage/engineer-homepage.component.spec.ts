import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerHomepageComponent } from './engineer-homepage.component';

describe('EngineerHomepageComponent', () => {
  let component: EngineerHomepageComponent;
  let fixture: ComponentFixture<EngineerHomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineerHomepageComponent]
    });
    fixture = TestBed.createComponent(EngineerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
