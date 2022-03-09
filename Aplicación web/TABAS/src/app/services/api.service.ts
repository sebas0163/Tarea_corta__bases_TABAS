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

  api_url: string = "https://localhost:44386/api/Menu";
  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.api_url, form)

  }

  postWorker(form: WorkerI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.api_url, form);
  }
}
