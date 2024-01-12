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

  sendModal(){
    this.sharedServ.enviarDatos(this.characterData);
  }

}
