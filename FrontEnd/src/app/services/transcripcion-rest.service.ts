import { Injectable } from '@angular/core';
import { InformacionLlamada } from "../model/InformacionLlamada";
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TranscripcionRestService {
  url = "http://localhost:3000/transcripcion";
  
  constructor(public http: HttpClient
  ) { }
  sendTranscripcion(infoLlamada: InformacionLlamada){
    let json = JSON.stringify(infoLlamada);

    //El backend recogerá un parametro json
    let params = "json=" + json;
    console.log(params);
    //Establecemos cabeceras
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(this.url, { headers, cedula: infoLlamada.getCedula(), texto: infoLlamada.getTranscripcion().getTexto() })
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
        },
        error => {
          console.log("Rrror", error);
        }
      );;
  }

}
