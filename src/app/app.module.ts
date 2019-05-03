import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { CurrentTrainingComponent } from './trainings/current-training/current-training.component';
import { NewTrainingComponent } from './trainings/new-training/new-training.component';
import { PastTrainingsComponent } from './trainings/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './naviation/header/header.component';
import {CommonModule} from '@angular/common';
import { SidenavListComponent } from './naviation/sidenav-list/sidenav-list.component';
import { AuthserviceService } from './authservice/authservice.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthGuard } from './auth.guard';
import { PhotoserviceService } from './welcome/photoservice.service';

var config = {
  apiKey: "AIzaSyCpjkg7qaoPj9E84DJH0_MHPAaj_d4Mk54",
  authDomain: "indiakt1.firebaseapp.com",
  databaseURL: "https://indiakt1.firebaseio.com",
  projectId: "indiakt1",
  storageBucket: "indiakt1.appspot.com",
  messagingSenderId: "813447891929"
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingsComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule      

  ],
  providers: [AuthserviceService, AuthGuard, PhotoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
