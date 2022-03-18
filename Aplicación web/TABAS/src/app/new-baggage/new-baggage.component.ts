import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Suitcase } from '../classes/suitcase';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-new-baggage',
  templateUrl: './new-baggage.component.html',
  styleUrls: ['./new-baggage.component.css']
})
export class NewBaggageComponent implements OnInit {

  newForm = new FormGroup({
    id: new FormControl(''),
    user: new FormControl(''),
    color: new FormControl(''),
    weight: new FormControl(''),
    cost: new FormControl(''),
    flight: new FormControl('')
  })

  dropdownOptions: any = ["SK 3341", "TP 1025", "UX 6025", "SN 3722", "JAI8686"];

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
  }

  /**
   * addBaggage: Agrega la maleta al registro con toda la informacion necesaria.
   */
  addBaggage() {
    let fid = this.newForm.get('id')?.value;
    let fuser = this.newForm.get('user')?.value;
    let fcolor = this.newForm.get('color')?.value;
    let fweight = this.newForm.get('weight')?.value;
    let fcost = this.newForm.get('cost')?.value;
    let fflight = this.newForm.get('flight')?.value;

    let baggage = new Suitcase(
      fid,
      fuser,
      fcolor,
      fweight,
      fcost,
      fflight
    )

    this.data.add(baggage);
    console.log(this.data.baggage);
    this.leave();
  }

  /**
   * Cancela el registro de la maleta, por lo que abandona la pagina actual.
   * Lo redirecciona a la pagina de Equipaje.
   */
  leave() {
    this.router.navigate(['baggage']);
  }

}
