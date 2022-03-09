import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WorkerRegistrationComponent } from './worker-registration/worker-registration.component';
import { BaggageComponent } from './baggage/baggage.component';
import { NewBaggageComponent } from './new-baggage/new-baggage.component';
import { WorkersComponent } from './workers/workers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkerRegistrationComponent,
    BaggageComponent,
    NewBaggageComponent,
    WorkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
