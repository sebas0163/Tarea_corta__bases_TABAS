import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Suitcase } from '../classes/suitcase';

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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  postForm(form: Suitcase) {

  }

  leave() {
    this.router.navigate(['baggage']);
  }

}
