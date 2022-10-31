import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../services/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  constructor(private service:TransferenciaService, private router: Router) { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Solicitada nova transferência');

    //if (this.ehValido()) {

      const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };
      // this.aoTransferir.emit(valorEmitir);

      this.service.adicionar(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
      error => console.error(error)
      );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }

  private ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }
}
