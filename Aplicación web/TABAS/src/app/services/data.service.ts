import { Injectable } from '@angular/core';
import { Suitcase } from '../classes/suitcase';
import { reporte } from '../models/reporte.interface';
import { vuelo } from '../models/vuelo.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baggage: Suitcase[];
  public conciliacion: vuelo[];

  public information: reporte[];
  constructor() {
    this.baggage = [];
    this.information = [];
    this.conciliacion =[];
  }

  add(suitcase: Suitcase) {
    this.baggage.push(suitcase);
  }
  /**
   * Funcion que define el json para ser leido en el reporte
   * @param dato documento json
   */
  setJson(dato: any){
    this.information = dato;
    //this.information = dato;
  }
  setJsonConci(dato: any){
    this.conciliacion = dato;
  }
}
