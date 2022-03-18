import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <div class="open-card-BG" *ngIf="registerView == 'regView1'"><nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">TABAS</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" routerLink="/login">Iniciar sesión</a>
                </div>
              </div>
            </div>
          </nav>
          
          <router-outlet></router-outlet></div>
            <div class="open-card-BG" *ngIf="registerView == 'regView2'"><nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/baggage">TABAS</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" routerLink="/workers">Registro de trabajadores</a>
                </div>
                <div class="navbar-nav">
                  <a class="nav-link" routerLink="/baggage">Equipaje</a>
                </div>
                <div class="navbar-nav">
                  <a class="nav-link" routerLink="/bagcart">Bagcart</a>
                </div>
              </div>
            </div>
          </nav>
          
          <router-outlet></router-outlet></div>
            `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TABAS';
  registerView = 'regView1';

}
