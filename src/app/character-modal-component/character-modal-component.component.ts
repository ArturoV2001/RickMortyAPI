import { Component, Input, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'character-modal-component',
  templateUrl: './character-modal-component.component.html',
  styleUrls: ['./character-modal-component.component.css']
})
export class CharacterModalComponentComponent implements OnInit {

  datos: any;
  episodes: number[];
  date: string;

  constructor(private sharedServ: SharedDataService) {
    this.episodes = [];
    this.date = "";
  }

  ngOnInit(): void {
    this.sharedServ.obtenerDatos().subscribe(data => {
      this.datos = data;
    })
  }

  characterModalGetEpisodes():number[]{
    this.episodes = [];
    for (let i of this.datos.episode) {
      this.episodes.push(Number(i.substring(43, i.length)));
    }
    return this.episodes;
  }
  characterModalGetDate():string{
    let d = new Date(this.datos.created);
    this.date = d.getDate + "/" + d.getMonth + "/" + d.getFullYear;
    return this.date;
  }

  characterModalisVowel(text:string):boolean{
    const primeraLetra = text.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(primeraLetra);
  }
}
