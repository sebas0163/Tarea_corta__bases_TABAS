import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerI } from '../models/worker.interface';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  headers = ["Nombre", "Apellidos", "Cédula", "Rol", "Correo electrónico"];
  workers: WorkerI[] = [];

  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute, private app: AppComponent) {
    this.route.params.subscribe(val => {

      this.showWorkers();
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    });
    this.app.registerView = 'regView2';
  }

  ngOnInit(): void {
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
