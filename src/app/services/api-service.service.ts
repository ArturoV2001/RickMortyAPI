import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  //URL de la API
  urlApi = 'https://rickandmortyapi.com/api';

  //Regresa todos los personajes de la API
  public apiServGetCharacters(): Observable<any> {
    return this.http.get<any>(this.urlApi + "/character");
  }

  //Regresa la informacion de un personaje buscandolo con ID
  public apiServGetCharacter(id: number): Observable<any> {
    return this.http.get<any>(this.urlApi + "/character/" + id);
  }

  //Regresa 20 personajes, una pagina, recibiendo la pagina
  public apiServGetCharacterPage(numPage: number): Observable<any> {
    return this.http.get<any>(this.urlApi + "/character/?page=" + numPage);
  }

  //Hace una busqueda de personajes por nombre y retorna los que tenc=gan coincidencias
  public apiServGetCharacterPageSearch(text: string, numPage: number): Observable<any> {
    return this.http.get<any>(this.urlApi + "/character/?page=" + numPage + "&name=" + text);
  }

}
