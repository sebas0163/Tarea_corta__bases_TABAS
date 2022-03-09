import { Injectable } from '@angular/core';
import { Suitcase } from '../classes/suitcase';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public baggage: Suitcase[];
  constructor() {
    this.baggage = [];
  }

  add(suitcase: Suitcase) {
    this.baggage.push(suitcase);
  }
}
