import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UpvotesComponent } from './pages/upvotes/upvotes.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MessageComponent } from './components/message/message.component';
import { HeaderComponent } from './components/header/header.component';

import {SearchService} from './services/search.service';
import {UpvoteService} from './services/upvote.service';
import {AuthenticationService} from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UpvotesComponent,
    HomeComponent,
    SearchComponent,
    MessageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule
  ],
  providers: [
    SearchService,
    UpvoteService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
