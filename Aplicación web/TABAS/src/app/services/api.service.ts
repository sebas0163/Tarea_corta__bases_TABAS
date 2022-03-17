import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkerI } from '../models/worker.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  post_url: string = "https://localhost:44396/api/post";
  get_url: string = "https://localhost:7101/api/trabajadores";
  get_reporteMal: string = "https://localhost:7101/api/Reporte";
  get_Conciliacion: string = "https://localhost:7101/api/Reporte2";
  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.post_url, form)

  }

  postWorker(form: WorkerI): Observable<ResponseI> {

    return this.http.post<ResponseI>(this.post_url, form);
  }

  getWorkers() {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<string>(this.get_url, requestOptions);

  }
  /**
   * Funcion encargada de hacer la solicitud al API de la informacion de maletas por usuario
   * @returns documento json con los usuarios y sus maletas
   */
  getMaletasUsuarios(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<string>(this.get_reporteMal, requestOptions);

  }
  /**
   * Funcion encargada de hacer la solicitud al API de la informacion de maletas por Vuelo
   * @returns documento json con la conciliacion de maletas por vuelo
   */
  getConciliation(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get<string>(this.get_Conciliacion, requestOptions);
  }
}
