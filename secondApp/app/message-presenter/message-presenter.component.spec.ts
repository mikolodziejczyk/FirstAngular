import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePresenterComponent } from './message-presenter.component';

describe('MessagePresenterComponent', () => {
  let component: MessagePresenterComponent;
  let fixture: ComponentFixture<MessagePresenterComponent>;

  beforeEach(async(() => {
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
