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
  get_url: string = "https://localhost:44396/api/trabajadores";
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
}
