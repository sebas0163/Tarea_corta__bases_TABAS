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
  /**
   * Funcion que define el json para ser leido en el reporte
   * @param dato documento json
   */
  setJson(dato:any){
    this.information = dato;
  }
}
