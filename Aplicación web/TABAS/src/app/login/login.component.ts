import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

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

  constructor(private router: Router, private app: AppComponent) { }

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
      this.changeNavBar('regView2');
      this.router.navigate(['baggage']);
    } else {
      console.log("Datos incorrectos");
      alert("Los credenciales no concuerdan con nuestra base de datos.");
    }
  }

  /**
   * changeNavBar: Cambia la vista de la barra de navegacion.
   * @param view navbar.
   */
  changeNavBar(view: any) {

    this.app.registerView = view;
  }

}
