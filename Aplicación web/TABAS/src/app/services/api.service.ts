import { Injectable } from '@angular/core';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  menu_url: string = "https://localhost:44386/api/Menu";
  constructor(private http: HttpClient) { }

  loginByEmail(form: LoginI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.menu_url, form)

  }
}
