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

  sendForm = new FormGroup({
    nombre1: new FormControl(''),
    nombre2: new FormControl(''),
    apellido1: new FormControl(''),
    apellido2: new FormControl(''),
    rol: new FormControl(''),
    cedula: new FormControl(''),
    // usuario: new FormControl(''),
    // password: new FormControl(''),
    // email: new FormControl('')
  })

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * postForm: Reune los datos del nuevo trabajador y lo registra en la base de datos.
   * @param form Trabajador nuevo.
   */
  postForm(form: WorkerI) {
    this.api.postWorker(form).subscribe(data => {
      console.log(data);
    });
    this.leave();
  }

  /**
   * Redirecciona la pagina hacia Registro de Trabajadores.
   */
  leave() {
    this.router.navigate(['workers']);
  }

}
