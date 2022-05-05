import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessageEditorComponent } from './message-editor.component';

describe('MessageEditorComponent', () => {
  let component: MessageEditorComponent;
  let fixture: ComponentFixture<MessageEditorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
