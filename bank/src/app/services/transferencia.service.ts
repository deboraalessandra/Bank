import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];

constructor() {
  this.listaTransferencia = [];
 }

 get transferencias( ) {
  return this.listaTransferencia;
 }

 adicionar(transferencia: any){
  this.listaTransferencia.push(transferencia);
  this.hidratar(transferencia);
 }

 private hidratar(transferencia:any){
  transferencia.data = new Date();
 }

}
