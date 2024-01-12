import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-characters-component',
  templateUrl: './characters-component.component.html',
  styleUrls: ['./characters-component.component.css']
})
export class CharactersComponentComponent implements OnInit{

  datos:any;
  numActualPage:number;

  constructor(private apiServ:ApiServiceService){ 
    this.numActualPage = 1;
  }

  ngOnInit(): void {
      this.apiServ.apiServGetCharacterPage(this.numActualPage).subscribe( data =>{
        this.datos = data;
      })
  }

  characterCompPaginationBtn(numPage:number){
    this.numActualPage = numPage;
    this.datos = null;
    this.characterCompGetPage(this.numActualPage);
  }

  //busca la pagina con el nombre del personaje y nos devuelve una bandera segun haya sido encontrado o no
  characterCompGetPage(numPage:number) {
    const obs = this.apiServ.apiServGetCharacterPage(numPage);
    obs.subscribe(
      data => {
        //this.findResultsFlag = true;
      },
      error => {
        //this.findResultsFlag = false;
      }
    );
    const prom = obs.toPromise();
    prom.then(
      data => {
        this.datos = data;
        //console.log(this.datos.info.count);
        //this.searchFlag = true;
      },
      error => {
        //console.log(this.findResultsText);
        //this.searchFlag = true;
      }
    )
  }
}
