import { Component, Input, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'character-modal-component',
  templateUrl: './character-modal-component.component.html',
  styleUrls: ['./character-modal-component.component.css']
})
export class CharacterModalComponentComponent implements OnInit {

  datos: any;

  constructor(private sharedServ: SharedDataService) { }

  ngOnInit(): void {
    this.sharedServ.obtenerDatos().subscribe(data => {
      this.datos = data;
    })
  }
  
  //Nos dice si la primera letra de la especi es un vocal
  characterModalisVowel(text:string):boolean{
    const primeraLetra = text.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(primeraLetra);
  }
}
