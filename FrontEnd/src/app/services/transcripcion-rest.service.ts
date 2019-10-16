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
    console.log(infoLlamada)
    let json = JSON.stringify(infoLlamada);
    //El backend recogerá un parametro json
    let params = "json=" + json;
        //Establecemos cabeceras
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(this.url, { headers, id: infoLlamada.getId() , cedula: infoLlamada.getDni() ,audio: infoLlamada.getAudio()})
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
