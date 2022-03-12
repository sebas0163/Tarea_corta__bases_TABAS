import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerI } from '../models/worker.interface';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  headers = ["Nombre", "Apellidos", "Cédula", "Rol"];
  workers: WorkerI[] = [];

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {

    this.api.getWorkers().subscribe((data: any) => {
      var a = data;
      a = a.replace(/'/g, '"');
      var result = JSON.parse(a);
      this.workers = result;
      console.log(result);
    })


  }

  addWorker() {
    this.router.navigate(['worker-registration']);
  }
}
