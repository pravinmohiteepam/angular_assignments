import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TimeStampService } from './services/timeStampService/time-stamp.service';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    PhoneFormatPipe,
    RegistrationComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeStampService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
