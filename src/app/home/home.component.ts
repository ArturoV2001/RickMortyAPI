import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Character } from '../interfaces/character.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  homeCompButtons(opc: number) {
    let ruta = '/search';
    switch (opc) {
      case 1:
        ruta = '/search';
        break;
      case 2:
        ruta = '/characters';
        break;
      case 3:
        ruta = '/locations';
        break;
      case 4:
        ruta = '/episodes';
        break;
    }
    this.router.navigate([ruta]);
  }
}
