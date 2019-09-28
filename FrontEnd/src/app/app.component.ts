import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranscripcionRestService } from './services/transcripcion-rest.service';
import { InformacionLlamada } from './model/InformacionLlamada';
import { Transcripcion } from './model/Transcripcion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  contacto: FormGroup;
  submitted = false;
  title = 'Formulario ingreso transcripcion';
  constructor(private formBuilder: FormBuilder, private transcriptServ: TranscripcionRestService) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
      transcripcion: ['', Validators.required],
    });
  }

  get f() { return this.contacto.controls; }

  onSubmit() {
    this.contacto.reset()
    let transcripcion: Transcripcion = new Transcripcion(1, this.contacto.value.transcripcion);
    let infoLlamada: InformacionLlamada = new InformacionLlamada(1);
    infoLlamada.setTranscripcion(transcripcion);
    let result = this.transcriptServ.sendTranscripcion(infoLlamada);
    console.log(result);
  }
}
