import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerI } from '../models/worker.interface';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  headers = ["Nombre", "Apellidos", "Cédula", "Rol"];
  workers: WorkerI[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addWorker() {
    this.router.navigate(['worker-registration']);
  }
}
