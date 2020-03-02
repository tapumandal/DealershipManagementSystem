import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './user_management/login/login.module';
import { RegistrationModule } from './user_management/registration/registration.module';
import { HeaderComponent } from './controller/header/header.component';
import { DashboardComponent } from './controller/business/dashboard/dashboard.component';

import { fakeBackendProvider } from "./_healpers";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    // HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegistrationModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
