import { Component, OnInit } from '@angular/core';
import { WorkerI } from '../models/worker.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

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

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  postForm(form: WorkerI) {
    this.api.postWorker(form).subscribe(data => {
      console.log(data);
    });
    this.leave();
  }

  leave() {
    this.router.navigate(['workers']);
  }

}
