import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  constructor() { }
  vuelo: string = "";

  ngOnInit(): void {
  }
  prueba(event: any){
    this.vuelo = event.target.value;
    alert("El vuelo asignado es: "+this.vuelo);
  }

}
