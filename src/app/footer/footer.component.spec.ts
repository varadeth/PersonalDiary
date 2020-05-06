import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { FooterComponent } from './footer.component';

import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have have a link for FEEDBACK', () => {
    debugElement = fixture.debugElement.query(By.css('.left'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement.textContent).toEqual('FEEDBACK');
  });

  it('should have have a link for Contact Us', () => {
    debugElement = fixture.debugElement.query(By.css('.right'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement.textContent).toEqual('CONTACT US');
  });
  /*Clicks need to be tested*/
});
