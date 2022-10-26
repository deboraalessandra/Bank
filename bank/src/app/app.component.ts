import { Component } from '@angular/core';

@Component({ // é um decorator que adiciona essas propriedades na classe
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank';

  transferir($event){
    console.log($event)
  }
}
