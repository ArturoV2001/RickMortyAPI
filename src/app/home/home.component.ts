import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private router: Router) { }

  //Nos manda a una ruta segun la opcion elegida
  homeCompButtons(opc: number) {
    let ruta = '/search';
    switch (opc) {
      case 1:
        ruta = '/search';
        break;
      case 2:
        ruta = '/characters';
        break;
    }
    this.router.navigate([ruta]);
  }
}
