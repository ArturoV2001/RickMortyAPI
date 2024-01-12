import { Component, Input } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'characters-card-component',
  templateUrl: './characters-card-component.component.html',
  styleUrls: ['./characters-card-component.component.css']
})
export class CharactersCardComponentComponent {
  
  @Input() characterData:any;

  constructor(private sharedServ:SharedDataService) { }

  //Envia al componente del modal la informacion del personaje para mostrarla de una manera mas completa
  charactersSendModal(){
    this.sharedServ.enviarDatos(this.characterData);
  }

}
