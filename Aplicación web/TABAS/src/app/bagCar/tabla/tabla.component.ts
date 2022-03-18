import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CarFormComponent } from '../car-form/car-form.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
/**
 * Clase controladora de la tabla de bagcarts
 */
export class TablaComponent implements OnInit {

  constructor(private app: AppComponent) {
    this.app.registerView = 'regView2';
  }

  ngOnInit(): void {
  }

}


