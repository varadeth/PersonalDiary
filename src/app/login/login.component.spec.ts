import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import {CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';
import { MatDialogRef, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugEl: DebugElement;
  let element: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Title, a form and 2 fields for username and password', () => {
    debugEl = fixture.debugElement.query(By.css('h1'));
    element = debugEl.nativeElement;
    console.log(element.textContent);
    expect(element.textContent).toBe('Login');
    let debugElArr: DebugElement[] = fixture.debugElement.queryAll(By.css('form'));
    expect(debugElArr.length).toEqual(1);
    debugElArr = fixture.debugElement.queryAll(By.css('mat-form-field'));
    expect(debugElArr.length).toEqual(2);
  });


  it('should execute onSubmit function on submit button click', fakeAsync(() => {
    spyOn(component, 'onLogin');
    debugEl = fixture.debugElement.query(By.css('.loginButton'));
    element = debugEl.nativeElement;
    element.click();
    tick();
    expect(component.onLogin).toHaveBeenCalled();
  }));

  it('should validate textfields', () => {
    console.log(component.loginForm);
    
  });
});
