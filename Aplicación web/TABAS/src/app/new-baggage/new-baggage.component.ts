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
    cost: new FormControl('')
  })

  constructor(private router: Router, private data: DataService) { }

  ngOnInit(): void {
  }

  postForm(form: Suitcase) {

  }

  addBaggage() {
    let fid = this.newForm.get('id')?.value;
    let fuser = this.newForm.get('user')?.value;
    let fcolor = this.newForm.get('color')?.value;
    let fweight = this.newForm.get('weight')?.value;
    let fcost = this.newForm.get('cost')?.value;

    let baggage = new Suitcase(
      fid,
      fuser,
      fcolor,
      fweight,
      fcost
    )

    this.data.add(baggage);
    console.log(this.data.baggage);
    this.leave();
  }

  leave() {
    this.router.navigate(['baggage']);
  }

}
