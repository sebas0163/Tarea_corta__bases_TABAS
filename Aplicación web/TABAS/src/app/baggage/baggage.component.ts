import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Suitcase } from '../classes/suitcase';

@Component({
  selector: 'app-baggage',
  templateUrl: './baggage.component.html',
  styleUrls: ['./baggage.component.css']
})
export class BaggageComponent implements OnInit {

  constructor(private router: Router) { }

  baggage: Suitcase[] = [];

  headers = ["Número de maleta", "Usuario", "Color", "Peso", "Costo de envío"]

  ngOnInit(): void {
  }

  addBaggage() {
    this.router.navigate(['new-baggage']);
  }

}
