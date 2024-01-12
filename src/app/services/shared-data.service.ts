import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private datosCompartidos = new Subject<any>();
  
  //envia datos a un observable
  enviarDatos(datos:any) {
    this.datosCompartidos.next(datos);
  }

  //obtiene los datos enviados al observable
  obtenerDatos() {
    return this.datosCompartidos.asObservable();
  }
}
