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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from './components/popup-modal/popup-modal.component';
import { HeaderComponent } from './components/partial_views/header/header.component';
import { DynamicComponent } from './components/dynamic-component/dynamic.component';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent,
    PhoneFormatPipe,
    RegistrationComponent,
    LoginComponent,
    ListComponent,
    PopupModalComponent,
    HeaderComponent,
    DynamicComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeStampService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
