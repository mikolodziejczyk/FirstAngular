import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonRendererComponent } from './person-renderer.component';

describe('PersonRendererComponent', () => {
  let component: PersonRendererComponent;
  let fixture: ComponentFixture<PersonRendererComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
