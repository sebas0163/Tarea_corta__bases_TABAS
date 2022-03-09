import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { LoginI } from '../models/login.interface';
import { User } from '../classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    access: new FormControl('Admin', Validators.required)
  })

  masterUser = new User(
    "master@tabas.com",
    "master123"
  );

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: LoginI) {
    // this.api.loginByEmail(form).subscribe(data => {
    //   console.log(data)
    // })


  }

  login() {
    let femail = this.loginForm.get('email')?.value;
    let fpassword = this.loginForm.get('password')?.value;
    console.log(femail);
    console.log(fpassword);
    if (femail == this.masterUser.email &&
      this.masterUser.password == fpassword) {
      this.router.navigate(['baggage']);
    } else {
      console.log("Datos incorrectos")
    }
  }

}
