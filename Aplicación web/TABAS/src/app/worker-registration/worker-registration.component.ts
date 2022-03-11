import { Component, OnInit } from '@angular/core';
import { WorkerI } from '../models/worker.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { WorkerII } from '../models/workeri.interface';

@Component({
  selector: 'app-worker-registration',
  templateUrl: './worker-registration.component.html',
  styleUrls: ['./worker-registration.component.css']
})
export class WorkerRegistrationComponent implements OnInit {

  newForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    id: new FormControl(''),
    role: new FormControl('')
  })

  sendForm = new FormGroup({
    nombre1: new FormControl(''),
    nombre2: new FormControl(''),
    apellido1: new FormControl(''),
    apellido2: new FormControl(''),
    rol: new FormControl(''),
    cedula: new FormControl(''),
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  postForm(form: WorkerI) {
    //this.format();
    //console.log(form);
    this.api.postWorker(form).subscribe(data => {
      console.log(data);
    });
    this.leave();
  }

  leave() {
    this.router.navigate(['workers']);
  }

  format() {

    let name = this.newForm.get('name')?.value;
    let lastname = this.newForm.get('lastname')?.value;
    let arrname = name.split(" ");
    let arrlastname = lastname.split(" ");
    let fname = arrname[0];
    let sname = arrname[1];
    let flastname = arrlastname[0];
    let slastname = arrlastname[1];

    console.log(fname);

    this.sendForm.setValue({
      name1: fname,
      name2: sname,
      lastname1: flastname,
      lastname2: slastname,
      role: this.newForm.get('role')?.value,
      id: this.newForm.get('id')?.value,
    })

  }

}
