import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MostrarDatosComponent } from './mostrar-datos/mostrar-datos.component';
import { EnviarDatoComponent } from './enviar-dato/enviar-dato.component';


@NgModule({
  declarations: [
    AppComponent,
    MostrarDatosComponent,
    EnviarDatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
