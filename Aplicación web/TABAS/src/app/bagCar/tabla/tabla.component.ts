import { Component, OnInit } from '@angular/core';
import { CarFormComponent } from '../car-form/car-form.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleModalCarFormClose() {
    //alert("se ha cerrado el modal")
  }

}


