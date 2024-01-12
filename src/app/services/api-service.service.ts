import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  nombresAux:string[];

  constructor(private http: HttpClient) { 
    this.nombresAux = [];
  }

  //URL de la API
  urlApi = 'https://rickandmortyapi.com/api';

  //Regresa todos los personajes de la API
  public apiServGetCharacters(): Observable<any> {
    return this.http.get<any>(this.urlApi+"/character");
  }

  //Regresa la informacion de un personaje buscandolo con ID
  public apiServGetCharacter(id: number): Observable<any> {
    return this.http.get<any>(this.urlApi + "/character/" + id);
  }
  
  //Regresa 20 personajes, una pagina, recibiendo la pagina
  public apiServGetCharacterPage(numPage: number): Observable<any> {
    return this.http.get<any>(this.urlApi + "/character/?page=" + numPage);
  }

  public apiServGetCharacterNames():string[]{
    this.apiServGetCharacters().subscribe( data =>{
      for(let item of data.results){
        this.nombresAux.push(item.name);
      }
    })
    return this.nombresAux;
  }

  //Hace una busqueda de personajes por nombre y retorna los que tenc=gan coincidencias
  public apiServGetCharacterPageSearch(text:string,numPage:number):Observable<any>{
    return this.http.get<any>(this.urlApi + "/character/?page="+numPage+"&name="+text);
  }

  /*public apiSerAsignEpisodes(obj: string): number[] {
    let epAux: string[] = JSON.parse(obj);
    let ea: number[] = [];
    for (let i of epAux) {
      ea.push(Number(i.substring(40, i.length)));
    }
    return ea;
  }*/

}
