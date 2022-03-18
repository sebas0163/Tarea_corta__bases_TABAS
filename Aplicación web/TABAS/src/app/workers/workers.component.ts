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

  headers = ["Nombre", "Apellidos", "Cédula", "Rol", "Correo electrónico"];
  workers: WorkerI[] = [];

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.showWorkers();
  }

  /**
   * addWorker: Redirecciona hacia la pagina para registrar a un trabajador.
   */
  addWorker() {
    this.router.navigate(['worker-registration']);
  }

  /**
   * showWorkers: Obtiene los trabajadores registrados en la base de datos, y los muestra en pantalla.
   */
  showWorkers() {
    this.api.getWorkers().subscribe((data: any) => {
      var a = data;
      a = a.replace(/'/g, '"');
      var result = JSON.parse(a);
      this.workers = result;
      console.log(result);
    })
  }
}
