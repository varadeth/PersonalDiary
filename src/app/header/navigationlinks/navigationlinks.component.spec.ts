import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationlinksComponent } from './navigationlinks.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('NavigationlinksComponent', () => {
  let component: NavigationlinksComponent;
  let fixture: ComponentFixture<NavigationlinksComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatDialogModule],
      declarations: [ NavigationlinksComponent ],
      providers:[MatDialog, Overlay]
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

  it('should have 2 links',()=> {
    const debugElementList: DebugElement[] = fixture.debugElement.queryAll(By.css('li'));
    expect(debugElementList.length).toEqual(2);
  });
});
