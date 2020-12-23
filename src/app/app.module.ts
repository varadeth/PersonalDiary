import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavigationlinksComponent } from './header/navigationlinks/navigationlinks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ContentComponent } from './content/content.component';
import { MatCardModule } from '@angular/material/card';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentAddComponent } from './content-add/content-add.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DateFormatPipe } from './DateFormatPipe/date-format.pipe';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthInterceptorService } from './services/AuthInterceptor.service';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    RegisterComponent,
    LoginComponent,
    NavigationlinksComponent,
    ContentComponent,
    ContentDetailComponent,
    ContentAddComponent,
    DateFormatPipe,
    SuccessAlertComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [
    DateFormatPipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, RegisterComponent, SuccessAlertComponent]
})
export class AppModule { }
