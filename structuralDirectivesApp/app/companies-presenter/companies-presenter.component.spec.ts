import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompaniesPresenterComponent } from './companies-presenter.component';

describe('CompaniesPresenterComponent', () => {
  let component: CompaniesPresenterComponent;
  let fixture: ComponentFixture<CompaniesPresenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
