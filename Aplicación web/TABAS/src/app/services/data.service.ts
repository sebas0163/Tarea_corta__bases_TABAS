import { Injectable } from '@angular/core';
import { Suitcase } from '../classes/suitcase';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baggage: Suitcase[];

  public information:any;
  constructor() {
    this.baggage = [];
    this.information = null;
  }

  add(suitcase: Suitcase) {
    this.baggage.push(suitcase);
  }
  // Añade el objeto tipo json la variable
  setJson(dato:any){
    this.information = dato;
  }
}
