import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private datosCompartidos = new Subject<any>();

  enviarDatos(datos:any) {
    this.datosCompartidos.next(datos);
  }

  obtenerDatos() {
    return this.datosCompartidos.asObservable();
  }
}
