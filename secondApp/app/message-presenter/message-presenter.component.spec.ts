import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessagePresenterComponent } from './message-presenter.component';

describe('MessagePresenterComponent', () => {
  let component: MessagePresenterComponent;
  let fixture: ComponentFixture<MessagePresenterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagePresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
