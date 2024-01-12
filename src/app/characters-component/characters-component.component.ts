import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-characters-component',
  templateUrl: './characters-component.component.html',
  styleUrls: ['./characters-component.component.css']
})
export class CharactersComponentComponent implements OnInit {

  datos: any;
  numActualPage: number;

  constructor(private apiServ: ApiServiceService) {
    this.numActualPage = 1;
  }

  //llena la variable datos con la primera pagina de personajes de la API
  ngOnInit(): void {
    this.apiServ.apiServGetCharacterPage(this.numActualPage).subscribe(data => {
      this.datos = data;
    })
  }

  //Nos muestra la siguiente/anterior pagina de personajes al teclear en la paginacion
  characterCompPaginationBtn(numPage: number) {
    this.numActualPage = numPage;
    this.datos = null;
    this.characterCompGetPage(this.numActualPage);
  }

  //Obtiene una pagina determinada de la API
  characterCompGetPage(numPage: number) {
    const obs = this.apiServ.apiServGetCharacterPage(numPage);
    obs.subscribe(
      data => { },
      error => { }
    );
    const prom = obs.toPromise();
    prom.then(
      data => {
        this.datos = data;
      },
      error => { }
    )
  }
}
