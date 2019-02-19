import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//===========================Firebase
import{AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFirestoreModule}from '@angular/fire/firestore';
import{AngularFireModule} from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
//===============================================
import { RouterModule } from '@angular/router';
import {environment} from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { JobslistComponent } from './pages/dashboard/jobslist/jobslist.component';


const ROUTES = [
  
  {
    path: '',
    redirectTo: 'login',
   
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'jobslist',
    component: JobslistComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    JobslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireStorageModule,
  
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.fireConfig),
  
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
