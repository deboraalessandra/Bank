import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({ // é um decorator que adiciona essas propriedades na classe
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bank';

  constructor(private service:TransferenciaService){

  }

  transferir($event){ // recebe o evento e propaga para o service
    this.service.adicionar($event);
  }

  // destino: number;
  // valor: number;
  // transferencias: any[] = [];

  // transferir($event) {
  //   console.log($event)
  //   // this.destino = $event.destino;
  //   // this.valor = $event.valor;
  //   const transferencia = {...$event, data: new Date()};
  //   this.transferencias.push(transferencia);
  }
  // exibirModalErro($event) {
  //   console.log($event)
//   // }
// }
