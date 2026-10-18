import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GrupoService {
  private readonly chamadaHttp = inject(HttpClient);

  urlGrupo: string = 'http://localhost:8080/grupos';

  salvarGrupo(grupo: any) {
    return this.chamadaHttp.post<any>(`${this.urlGrupo}/salvar-grupo`, grupo);
  }

  listarGrupos(filtro: string = '') {
    return this.chamadaHttp.get<any>(`${this.urlGrupo}/listar-grupos`, {
      params: { filtro },
    });
  }

}
