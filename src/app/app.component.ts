import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'clase3';
  title = 'app';



  ButtonAlert(dato:any)
  {
    //alert(dato);
    this.title=dato;
  }


}
