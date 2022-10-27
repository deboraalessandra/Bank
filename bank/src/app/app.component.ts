import { Component } from '@angular/core';

@Component({ // é um decorator que adiciona essas propriedades na classe
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank';
  // destino: number;
  // valor: number;
  transferencia: any;

  transferir($event) {
    console.log($event)
    // this.destino = $event.destino;
    // this.valor = $event.valor;
    this.transferencia = $event;
  }
  exibirModalErro($event) {
    console.log($event)
  }
}
