import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationlinksComponent } from './navigationlinks.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { element } from 'protractor';
describe('NavigationlinksComponent', () => {
  let component: NavigationlinksComponent;
  let fixture: ComponentFixture<NavigationlinksComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [MatDialogModule],
      declarations : [ NavigationlinksComponent ],
      providers : [MatDialog, Overlay]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 links', () => {
    const debugElementList: DebugElement[] = fixture.debugElement.queryAll(By.css('.rightStyle'));
    expect(debugElementList.length).toEqual(2);
  });

  it('should have links named login and signup', () => {
    const debugElementList: DebugElement[] = fixture.debugElement.queryAll(By.css('.linkStyle'));
    let count = 0;
    for (let index = 0; index < debugElementList.length; index++) {
      const el = debugElementList[index];
      htmlElement = el.nativeElement;
      if (htmlElement.textContent === component.links[index].name) {
        count++;
      }
    }
    expect(count).toEqual(2);
  });
  /*clicks need to be tested */

  it('should open dialog box', () => {
    const debugList: DebugElement[] = fixture.debugElement.queryAll(By.css('linkStyle'));
    for (const debugEl of debugList) {
      htmlElement = debugEl.nativeElement;
      expect(htmlElement.click()).toHaveBeenCalled();
    }
  });
});
