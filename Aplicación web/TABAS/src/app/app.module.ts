import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './bagCar/tabla/tabla.component';
import { CarFormComponent } from './bagCar/car-form/car-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CarFormComponent]
})
export class AppModule { }
