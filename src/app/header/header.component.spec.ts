import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debug: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ HeaderComponent, ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navigationLinksComponent', () => {
    debug = fixture.debugElement.query(By.css('ul'));
    debug = debug.query(By.css('app-navigationlinks'));
    htmlElement = debug.nativeElement;
    expect(htmlElement).toBeDefined();
  });

  it('should have icon', () => {
    debug = fixture.debugElement.query(By.css('ul'));
    debug = debug.query(By.css('li'));
    htmlElement = debug.nativeElement;
    expect(htmlElement.querySelector('img').src).toContain(component.brandImage);
  });

  it('should have title as DIARY', () => {
    debug = fixture.debugElement.query(By.css('.brand-name'));
    htmlElement = debug.nativeElement;
    expect(htmlElement.textContent).toBe('DIARY');
  });

});
