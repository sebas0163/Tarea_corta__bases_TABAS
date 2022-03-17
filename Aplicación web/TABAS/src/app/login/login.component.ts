import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
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
    "master123",
    "master@tabas.com"
  );

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * login: Verifica que los credenciales sean validos, para luego iniciar sesion a la pagina.
   */
  login() {
    let fusername = this.loginForm.get('username')?.value;
    let fpassword = this.loginForm.get('password')?.value;
    console.log(fusername);
    console.log(fpassword);
    if ((fusername == this.masterUser.username || fusername == this.masterUser.email) &&
      this.masterUser.password == fpassword) {
      this.router.navigate(['baggage']);
    } else {
      console.log("Datos incorrectos");
      alert("Los credenciales no concuerdan con nuestra base de datos.");
    }
  }

}
