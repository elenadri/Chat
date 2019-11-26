import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAddPage } from './chat-add.page';

describe('ChatAddPage', () => {
  let component: ChatAddPage;
  let fixture: ComponentFixture<ChatAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
