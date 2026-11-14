import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GrupoService } from '../grupo-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupo-listar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './grupo-listar.html',
  styleUrl: './grupo-listar.css',
})
export class GrupoListar implements OnInit {
  private readonly grupoService = inject(GrupoService);

  private readonly cdr = inject(ChangeDetectorRef);

  private readonly router = inject(Router);

  voltarParaCadastro(): void {
    this.router.navigate(['/grupo-cadastrar']);
  }

  filtro: string = '';
  grupos: any[] = [];

  ngOnInit(): void {
    this.filtro = '';
    this.listarGrupos();
  }

  buscarGrupos(): void {
    this.listarGrupos();
  }

  listarGrupos(): void {
    this.grupoService.listarGrupos(this.filtro.trim()).subscribe({
      next: (resposta) => {
        this.grupos = [...(resposta.content ?? [])];
        this.cdr.detectChanges();

        console.log('Filtro pesquisado:', this.filtro);
        console.log('Resultado atualizado:', this.grupos);
      },
      error: (erro: unknown) => {
        console.error('Erro ao listar grupos:', erro);
        this.grupos = [];
        this.cdr.detectChanges();
      },
    });
  }

  deletarGrupo(id: number): void {
    if (!confirm('Tem certeza que deseja excluir este grupo?')) {
      return;
    }

    this.grupoService.deletarGrupo(id).subscribe({
      next: () => {
        alert('Grupo excluído com sucesso!');
        this.listarGrupos();
      },
      error: (erro: unknown) => {
        console.error('Erro ao excluir grupo:', erro);
        alert('Não foi possível excluir o grupo.');
      },
    });
  }


}
