import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';


class DialogTestModule { }
describe('AppComponent', () => {

  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [
        AppComponent
      ],
      providers:[
        MatDialog,
      ]
    }).compileComponents();
  }));

  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have headercomponent`, () => {
    debugElement = fixture.debugElement.query(By.css('app-header'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement).toBeDefined();
  });

  it('should have footerComponent', () => {
    debugElement = fixture.debugElement.query(By.css('app-footer'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement).toBeDefined();
  });

  it('should have routermodule', () => {
    debugElement = fixture.debugElement.query(By.css('router-outlet'));
    htmlElement = debugElement.nativeElement;
    expect(htmlElement).toBeDefined();
  });
  

});
