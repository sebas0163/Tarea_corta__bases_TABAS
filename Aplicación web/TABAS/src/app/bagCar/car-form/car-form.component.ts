import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
/**
 * Clase controladora del componente Dropdown
 */
export class CarFormComponent implements OnInit {

  constructor() { }
  vuelo: string = "";

  ngOnInit(): void {
  }
  /**
   * Función que asigna un avión al bagcart
   * @param event click del dropdown
   */
  prueba(event: any){
    this.vuelo = event.target.value;
    alert("El vuelo asignado es: "+this.vuelo);
  }

}
