import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suitcase } from '../classes/suitcase';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css']
})
export class BaggageComponent implements OnInit {

  baggage: Suitcase[];

  constructor(private router: Router, private data: DataService) {
    this.baggage = this.data.baggage;
  }



  headers = ["Número de maleta", "Usuario", "Color", "Peso", "Costo de envío"]

  ngOnInit(): void {
  }

  addBaggage() {
    this.router.navigate(['new-baggage']);
  }

}
