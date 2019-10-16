import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranscripcionRestService } from './services/transcripcion-rest.service';
import { InformacionLlamada } from './model/InformacionLlamada';
import { Transcripcion } from './model/Transcripcion';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  contacto: FormGroup;
  submitted = false;
  title = 'Carga del audio';

  constructor(private formBuilder: FormBuilder, private transcriptServ: TranscripcionRestService) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
      transcripcion: ['', Validators.required],
      codigo: ['', Validators.required]
    });
    //Listener para cuándo se cargue un audio...
    console.log("Iniciando...");
    let fileInput: any = document.querySelector('input[type="file"]');
    fileInput.addEventListener('change', function (e) {
        let reader = new FileReader();
        reader.onload = function (e) {
          (<HTMLInputElement>document.getElementById("base64")).value=initSound(this.result);
        };
        reader.readAsArrayBuffer(this.files[0]);
    }, false);
  }

  get f() { return this.contacto.controls; }

  onSubmit() {
    let infoLlamada: InformacionLlamada = new InformacionLlamada(this.contacto.value.codigo);
    infoLlamada.setTranscripcion("");
    infoLlamada.setDni(this.contacto.value.transcripcion);
    infoLlamada.setAudio((<HTMLInputElement>document.getElementById("base64")).value);
    let result = this.transcriptServ.sendTranscripcion(infoLlamada);
    console.log(result);
  }
}
