import { Injectable } from '@angular/core';
import { Suitcase } from '../classes/suitcase';

@Injectable({
  providedIn: 'root'
})

/**
 * Almacena las maletas registradas.
 */
export class DataService {

  public baggage: Suitcase[];
  constructor() {
    this.baggage = [];
  }

  /**
   * add: Agrega la nueva maleta al registro de maletas.
   * @param suitcase Maleta.
   */
  add(suitcase: Suitcase) {
    this.baggage.push(suitcase);
  }
}
