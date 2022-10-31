import { Transferencia } from './models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
 }

 get transferencias( ) {
  return this.listaTransferencia;
 }

 todas(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url); // get vai retonar um observable de todas as transferencias
 }

 adicionar(transferencia: any){
  this.listaTransferencia.push(transferencia);
  this.hidratar(transferencia);
 }

 private hidratar(transferencia:any){
  transferencia.data = new Date();
 }

}
