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
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    access: new FormControl('Admin', Validators.required)
  })

  masterUser = new User(
    "master",
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
    let fusername = this.loginForm.get('username')?.value;
    let fpassword = this.loginForm.get('password')?.value;
    console.log(fusername);
    console.log(fpassword);
    if (fusername == this.masterUser.username &&
      this.masterUser.password == fpassword) {
      this.router.navigate(['baggage']);
    } else {
      console.log("Datos incorrectos")
    }
  }

}
