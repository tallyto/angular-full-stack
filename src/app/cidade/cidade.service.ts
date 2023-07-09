import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {
  private url = 'http://localhost:3000/cidades'

  constructor(private http: HttpClient) { }

  consultar() {
    return this.http.get(this.url)
  }

  adicionar(cidade: any) {
   return  this.http.post(this.url, cidade)
  }

}
