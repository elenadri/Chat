import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAddImagePage } from './chat-add-image.page';

describe('ChatAddImagePage', () => {
  let component: ChatAddImagePage;
  let fixture: ComponentFixture<ChatAddImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAddImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAddImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
