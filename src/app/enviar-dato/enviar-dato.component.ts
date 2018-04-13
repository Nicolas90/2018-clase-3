import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enviar-dato',
  templateUrl: './enviar-dato.component.html',
  styleUrls: ['./enviar-dato.component.css']
})
export class EnviarDatoComponent implements OnInit {


  @Output()  EnviarDato: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


  Enviar(){

    //alert("enviar datos");
    this.EnviarDato.emit("Hola enviar dato");
  }


}
