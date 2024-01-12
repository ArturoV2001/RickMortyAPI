import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent {

  datos: any;
  searchFlag: boolean;
  searchText: string;
  findResultsFlag: boolean;
  numActualPage:number;

  constructor(private apiServ: ApiServiceService) {
    this.searchFlag = false;
    this.searchText = "";
    this.findResultsFlag = false;
    this.numActualPage = 1;
  }
  
  //busca la pagina con el nombre del personaje y nos devuelve una bandera segun haya sido encontrado o no
  searchCompGetPage(numPage:number) {
    const obs = this.apiServ.apiServGetCharacterPageSearch(this.searchText,numPage);
    obs.subscribe(
      data => {
        this.findResultsFlag = true;
      },
      error => {
        this.findResultsFlag = false;
      }
    );
    const prom = obs.toPromise();
    prom.then(
      data => {
        this.datos = data;
        this.searchFlag = true;
      },
      error => {
        this.searchFlag = true;
      }
    )
  }
  //Cambia de pagina segun se seleccione en la paginacion
  searchCompPaginationBtn(numPage:number){
    this.numActualPage = numPage;
    this.datos = null;
    this.searchCompGetPage(this.numActualPage);
  }

}
