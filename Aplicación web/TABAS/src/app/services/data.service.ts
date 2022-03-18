import { Injectable } from '@angular/core';
import { Suitcase } from '../classes/suitcase';

@Injectable({
  providedIn: 'root'
})

/**
 * Servicio utilizado para compartir la data almacenada.
 */
export class DataService {

  public baggage: Suitcase[];
  public logged: boolean;
  constructor() {
    this.baggage = [];
    this.logged = false;
  }

  /**
   * add: Agrega la nueva maleta al registro de maletas.
   * @param suitcase Maleta.
   */
  add(suitcase: Suitcase) {
    this.baggage.push(suitcase);
  }

}
