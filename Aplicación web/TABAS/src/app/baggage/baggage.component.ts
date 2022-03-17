import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suitcase } from '../classes/suitcase';
import { DataService } from '../services/data.service';
import listaUsuarios from 'src/assets/ejemplo.json';
import Conciliacion from 'src/assets/ejemplo2.json';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css']
})
export class BaggageComponent implements OnInit {
  baggage: Suitcase[];

  constructor(private router: Router, private data: DataService, private api:ApiService) {
    this.baggage = this.data.baggage;
  }



  headers = ["Número de maleta", "Usuario", "Color", "Peso", "Costo de envío", "Vuelo"]

  ngOnInit(): void {
  }



  addBaggage() {
    this.router.navigate(['new-baggage']);
  }
  /* Función que solicita la informacion de maletas por cliente al API
     Retorno: void
     Creada por Sebastian
  */
  getUserBaggage(){
    //this.data.setJson(listaUsuarios);
    this.api.getMaletasUsuarios().subscribe((data: any) => {
      var a = data;
      a = a.replace(/'/g, '"');
      var result = JSON.parse(a);
      this.data.setJson(result);
      console.log(result);
    })
  }
  /* Función que solicita la Conciliacion de maletas al API
     Retorno: void
     Creada por Sebastian
  */
  getBaggageConciliation(){
    //this.data.setJson(Conciliacion);
    this.api.getConciliation().subscribe((data: any) => {
      var a = data;
      a = a.replace(/'/g, '"');
      var result = JSON.parse(a);
      this.data.setJson(result);
      console.log(result);
    })
  }

}
